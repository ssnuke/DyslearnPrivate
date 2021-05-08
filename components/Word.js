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
    margin: 2,
    height: 50,
    minWidth: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#323740",
  },
  text: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
