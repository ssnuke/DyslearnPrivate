import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Speech from "expo-speech";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

import Card from "../components/Card";
import Input from "../components/Input";

const Practice = (props) => {
  const [data, setNewData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const bgImage = require("../assets/images/BackGroundImage.png");

  useEffect(() => {
    (async () => {
      const cloudData = await API.graphql({ query: queries.listTodos });
      let newData = cloudData.data.listTodos.items;
      newData.map((mydata) =>
        setNewData((prevData) => [
          ...prevData,
          { id: mydata.id, value: mydata.name, img: mydata.image },
        ])
      );
    })();
  }, []);

  const closeModal = (text, image) => {
    onAddTask(text, image);
    setModalVisible(false);
    // console.log(text, image);
  };

  //Speak word
  const speakWord = (value) => {
    Speech.speak(value, { rate: 0.5 });
  };

  const onAddImage = async (imageName, text) => {
    const updatedCard = { name: text, image: imageName };
    await API.graphql(graphqlOperation(updateTodo, { input: updatedCard }));
  };

  //Add Task
  const onAddTask = async (text, image) => {
    if (text === " ") {
      Alert.alert("Text cannot be empty!");
    }
    const newCard = { name: text, image: image };
    await API.graphql(graphqlOperation(createTodo, { input: newCard }));
    setNewData((prevData) => [...prevData, { value: text, img: image }]);
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <View style={styles.touchableContainer}>
              <TouchableOpacity style={styles.touchable} onPress={() => setModalVisible(true)}>
                <Text style={styles.text}>ADD A NEW CARD</Text>
              </TouchableOpacity>
            </View>

            {/* <Button
              style={styles.button}
              title="Add a new Card"
              onPress={() => setModalVisible(true)}
            /> */}
            <Input visible={modalVisible} onClose={closeModal} />
          </View>

          {modalVisible ? null : (
            <FlatList
              data={data}
              style={styles.list}
              renderItem={(itemData) => (
                <Card
                  text={itemData.item.value}
                  cloudImage={itemData.item.img}
                  onSelect={() => speakWord(itemData.item.value)}
                  onImageAdd={onAddImage}
                />
              )}
            />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    flex: 1,
    padding: 15,
    width: "100%",
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
  },
  button: {
    width: "30%",
  },
  touchableContainer: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  touchable: {
    height: 50,
    width: 120,
    backgroundColor: "#242433",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text:{
    fontWeight:'bold',
    color: 'white',
  },
  list: {
    marginTop: 20,
  },
});
