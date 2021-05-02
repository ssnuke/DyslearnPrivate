import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import * as Speech from "expo-speech";
const word = "I am a girl ";
const CompleteSentence = (props) => {
  const [textInput, setTextInput] = useState("");
  const speakWord = (value) => {
    Speech.speak(value, { rate: 0.5 });
  };
  const changeText = (input) => {
    setTextInput(input);
  };
  const checkWord = (input) => {
    if (input == word) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };
  return (
    <View style={styles.container}>
      <Button title="speak" onPress={() => speakWord(word)} />
      <TextInput
        style={styles.input}
        placeholder="ADD A WORD"
        onChangeText={changeText}
        value={textInput}
      />
      {/* <Button title="SUBMIT" onPress={() => checkWord(input)} /> */}
    </View>
  );
};
export default CompleteSentence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
