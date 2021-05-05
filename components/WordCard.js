import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather, Ionicons, Entypo } from "@expo/vector-icons";

import Word from "./Word";

const WordCard = (props) => {
  const { itemData } = props;
  const [textInput, setTextInput] = useState([]);
  const [myAnswer, setMyAnswer] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  var res = itemData.jumbled.split(" ");
  var correctAnswer = itemData.correct.split(" ");
  let sentence = [];

  //Updating the input
  const updateInput = (value) => {
    let newTexts = [...textInput];
    sentence = [...myAnswer];
    sentence.push(value);
    newTexts.push(" " + value);
    setMyAnswer(sentence);
    setTextInput(newTexts);
  };

  //Deleting Element
  const popElement = () => {
    let newTexts = [...textInput];
    sentence = [...myAnswer];
    sentence.pop();
    newTexts.pop();
    setTextInput(newTexts);
    setMyAnswer(sentence);
  };

  //Updating Icon for right and wrong answer
  let Icon = (
    <Ionicons name="checkmark-done-circle-outline" size={24} color="black" />
  );

  if (submitted) {
    if (rightAnswer) {
      Icon = (
        <Ionicons name="checkmark-done-circle-sharp" size={24} color="green" />
      );
    } else if (!rightAnswer) {
      Icon = <Entypo name="circle-with-cross" size={24} color="red" />;
    } else {
      Icon = (
        <Ionicons
          name="checkmark-done-circle-outline"
          size={24}
          color="black"
        />
      );
    }
  }

  //Checking Answer
  const checkAnswer = () => {
    if (myAnswer.length === 0) {
      Alert.alert("Empty Input");
      setSubmitted(false);
      return
    }
    if (JSON.stringify(correctAnswer) == JSON.stringify(myAnswer)) {
      setRightAnswer(true);
    } else {
      setRightAnswer(false);
    }
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        {res.map((items) => (
          <Word text={items} onWordSelect={updateInput} onWordPopped={popElement} updateButton={() => {}}/>
        ))}
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>{textInput}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={checkAnswer}>{Icon}</TouchableOpacity>

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
