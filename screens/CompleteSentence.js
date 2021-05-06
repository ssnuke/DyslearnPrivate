import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import WordCard from "../components/WordCard";
import { TEST_DATA } from "../data/sentence";

const CompleteSentence = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.word}>
        <FlatList
          data={TEST_DATA}
          renderItem={(itemData) => <WordCard itemData={itemData.item} />}
          // horizontal={true}
        />
      </View>
    </View>
  );
};

export default CompleteSentence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  word: {
    flexDirection: "row",
    margin: 10,
  },
});
