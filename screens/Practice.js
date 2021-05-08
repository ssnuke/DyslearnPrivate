import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import * as Speech from "expo-speech";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

import Card from "../components/Card";

const Practice = (props) => {
  const [textInput, setTextInput] = useState("");
  const [data, setNewData] = useState([]);

  useEffect(() => {
    (async () => {
      const cloudData = await API.graphql({ query: queries.listTodos });
      let newData = cloudData.data.listTodos.items;
      // console.log(newData);
      newData.map((mydata) =>
        setNewData((prevData) => [
          ...prevData,
          { id: mydata.id, value: mydata.name, image: mydata.image },
        ])
      );
    })();
  }, []);

  const changeText = (input) => {
    setTextInput(input);
  };

  //Add Task
  const onAddTask = async () => {
    if (textInput === " ") {
      Alert.alert("Text cannot be empty!");
    }
    const newCard = { name: textInput, image: null };
    await API.graphql(graphqlOperation(createTodo, { input: newCard }));

    setNewData((prevData) => [...prevData, { value: textInput }]);
    setTextInput("");
  };

  //Speak word
  const speakWord = (value) => {
    Speech.speak(value, { rate: 0.5 });
  };

  const onAddImage = async (imageName,text) => {
    // console.log(" Image is :"+imageName)
    const updatedCard = {name: text , image: imageName }
    await API.graphql(
      graphqlOperation(updateTodo, { input: updatedCard })
    );
  };

  /*Complete Deleting object from db */
  // useEffect(() => {
  //   async () => {
  //     const cloudData = await API.graphql({ query: queries.listTodos });
  //     let updatedData = cloudData.data.listTodos.items;
  //     updatedData.map((mydata) =>
  //       setNewData((prevData) => [...prevData, mydata])
  //     );
  //   };
  // }, [deleteData]);

  // //Delete Todo
  // const deleteData = async (id) => {
  //   API.graphql(graphqlOperation(deleteTodo, { input: { id: id } }));
  //   let updatedData = data.filter((item) => item.id !== id);
  //   setNewData(updatedData);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="ADD A WORD"
            onChangeText={changeText}
            value={textInput}
          />
          <Button style={styles.button} title="ADD" onPress={onAddTask} />
        </View>

        <FlatList
          data={data}
          style={styles.list}
          renderItem={(itemData) => (
            <Card
              text={itemData.item.value}
              cloudImage={itemData.item.image}
              onSelect={() => speakWord(itemData.item.value)}
              onImageAdd={onAddImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  list: {
    marginTop: 20,
  },
});
