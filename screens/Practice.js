import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import * as Speech from "expo-speech";
import Card from "../components/Card";

const Practice = (props) => {
  const [textInput, setTextInput] = useState("");
  const [data, setNewData] = useState([]);

  const changeText = (input) => {
    setTextInput(input);
  };

  const onAddTask = () => {
    setNewData((prevData) => [
      ...prevData,
      { id: Math.random().toString(), value: textInput },
    ]);
    setTextInput("");
    console.log(data);
  };

  const speakWord = (value) => {
    Speech.speak(value, { rate: 0.5 });
  };

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
              onSelect={() => speakWord(itemData.item.value)}
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
  textInputContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
  },
  button: {
    width: "30%",
  },
  list:{
    marginTop:20,
  }
});
