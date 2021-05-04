import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";

import Word from "./Word";

const WordCard = (props) => {
  const { itemData } = props;
  const [textInput, setTextInput] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  var res = itemData.jumbled.split(" ");
  var answer = itemData.correct.split(" ");
  let box = answer.length;

  const updateInput = (value) => {
    let newTexts = [...textInput];
    newTexts.push(" " + value);
    setTextInput(newTexts);
  };

  const popElement = () => {
    let newTexts = [...textInput];
    newTexts.pop();
    setTextInput(newTexts);
  };

  let Icon = (
    <Ionicons name="checkmark-done-circle-outline" size={24} color="black" />
  );
  if (submitted) {
    Icon = (
      <Ionicons name="checkmark-done-circle-sharp" size={24} color="green" />
    );
  }

  const checkAnswer = () => {
    console.log(textInput.values);
    const result = JSON.stringify(answer) === JSON.stringify(textInput)
    //  const right = answer.map() == textInput.map()
    // console.log(result);
    // setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        {res.map((items) => (
          <Word text={items} onWordSelect={updateInput} />
        ))}
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>{textInput}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={checkAnswer}>{Icon}</TouchableOpacity>

          <Entypo name="circle-with-cross" size={24} color="red" />

          <TouchableOpacity onPress={popElement}>
            <Feather name="delete" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WordCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    minHeight: 300,
    borderRadius: 6,
  },
  wordContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  answerContainer: {
    backgroundColor: "#888",
    borderRadius: 5,
    elevation: 10,
    shadowColor: "black",
    marginTop: 50,
    padding: 20,
  },
  answer: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
