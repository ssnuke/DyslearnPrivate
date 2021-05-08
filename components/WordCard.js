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
  const [disable, setDisable] = useState(false);

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
    setDisable(true);
  };

  //Deleting Element
  const popElement = () => {
    let newTexts = [...textInput];
    sentence = [...myAnswer];
    sentence.pop();
    newTexts.pop();
    setTextInput(newTexts);
    setMyAnswer(sentence);
    setDisable(false);
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
      return;
    }
    if (JSON.stringify(correctAnswer) == JSON.stringify(myAnswer)) {
      setRightAnswer(true);
    } else {
      setRightAnswer(false);
    }
    setSubmitted(true);
  };

  //Rest Answer

  const resetAnswer = () => {
    setTextInput([]);
    setMyAnswer([]);
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        {res.map((items, index) => (
          <Word
            text={items}
            onWordSelect={updateInput}
            updateButton={popElement}
            key={index}
          />
        ))}
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>{textInput}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={checkAnswer}>{Icon}</TouchableOpacity>
          <TouchableOpacity onPress={resetAnswer}>
            <Ionicons name="refresh-circle-sharp" size={24} color="grey" />
          </TouchableOpacity>

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
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    minHeight: 300,
    borderRadius: 10,
    backgroundColor: "#a6b9bd",
  },
  wordContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  answerContainer: {
    flex:1,
    borderRadius: 10,
    elevation: 10,
    marginTop: 100,
    padding: 20,
    shadowColor: "black",
    backgroundColor: "white",
    justifyContent: 'flex-end',
  },
  answer: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
