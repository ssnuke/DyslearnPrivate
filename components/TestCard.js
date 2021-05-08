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
    <View style={styles.listItemContainer}>
      <View style={styles.card}>
        <View style={styles.info}>
          {/* <Text>{word}</Text> */}
          <Image source={{ uri: wordImage }} style={styles.image} />
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
    </View>
  );
};

export default TestCard;

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
    // height:'100%',
  },
  card: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 200,
    justifyContent: "space-between",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
