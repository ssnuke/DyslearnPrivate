import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";
import * as Speech from "expo-speech";

const TestCard = (props) => {
  const { word, wordImage } = props;

  const [answer, setAnswer] = useState();

  const speakWord = (word) => {
    Speech.speak(word, { rate: 1 });
  };

  const checkAnswer = () => {
    if (word === answer) {
      console.log("Correct Answer");
    } else {
      console.log("Wrong Answer");
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text>{word}</Text>
        <Image />
        <Button title="Speech" onPress={() => speakWord(word)} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your answer"
          onChangeText={setAnswer}
          value={answer}
        />
        <Button title="Submit" onPress={checkAnswer} />
      </View>
    </View>
  );
};

export default TestCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#888",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
});
