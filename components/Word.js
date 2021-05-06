import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Word = (props) => {
  const { text, onWordSelect, updateButton } = props;
  const [value, setValue] = useState(text);
  const [disableInput, setDisableInput] = useState(false);

  const onSelect = () => {
    onWordSelect(value);
  };

  return (
    <TouchableOpacity style={styles.wordContainer} onPress={onSelect}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Word;

const styles = StyleSheet.create({
  wordContainer: {
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 4,
    height: 50,
    width: 50,
  },
  text: {
    textAlign: "center",
  },
});
