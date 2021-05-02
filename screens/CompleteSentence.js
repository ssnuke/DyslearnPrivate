import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Word from "../components/Word";
import { TEST_DATA } from "../data/sentence";

const CompleteSentence = (props) => {
  const newWord = (itemData) => { 
    var res = itemData.jumbled.split(" ");
    return (
      res.map(items => <Word text={items}/>)
    );
  };

  return (
    <View style={styles.container}>
      {TEST_DATA.map((itemData) => newWord(itemData))}
    </View>
  );
};

export default CompleteSentence;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    margin: 10,
  },
});
