import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TestCard = (props) => {
  const { word, wordImage } = props;

  const [answer, setAnswer] = useState();
  const [rightAnswer, setRightAnswer] = useState(false);
  const [color,setColor] = useState('#a6b9bd')



  const speakWord = (word) => {
    Speech.speak(word, { rate: 1 });
  };

  const checkAnswer = () => {
    if (JSON.stringify(word) == JSON.stringify(answer)) {
      console.log("Correct Answer");
      setRightAnswer(true);
      setColor('#45b305')
      
    } else {
      console.log("Wrong Answer");
      setRightAnswer(false);
      setColor('#a30505');
    }
  };

  return (
    <View style={styles.listItemContainer}>
      <View style={{ ...styles.card, backgroundColor: color }}>
        <View style={styles.info}>
          {/* <Text>{word}</Text> */}
          <Image source={{ uri: wordImage }} style={styles.image} />

          <View style={styles.touchableContainer}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => speakWord(word)}
            >
              <MaterialCommunityIcons
                name="text-to-speech"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>

          {/* <Button title="Speech" onPress={() => speakWord(word)} /> */}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type your answer"
            onChangeText={setAnswer}
            value={answer}
            style={styles.inputBox}
          />

          <View style={styles.touchableContainer}>
            <TouchableOpacity
              style={{ ...styles.touchable, width: 70 }}
              onPress={checkAnswer}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>

          {/* <Button title="Submit" onPress={checkAnswer} /> */}
        </View>
      </View>
    </View>
  );
};

export default TestCard;

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    width: "100%",
  },
  card: {
    height: 300,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#a6b9bd",
    justifyContent: "space-between",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  touchableContainer: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  touchable: {
    height: 50,
    width: 50,
    backgroundColor: "#242433",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputBox: {
    width: 200,
    height: 60,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
