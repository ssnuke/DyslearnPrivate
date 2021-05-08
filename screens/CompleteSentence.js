import React from "react";
import { View, StyleSheet, FlatList, ImageBackground } from "react-native";

import WordCard from "../components/WordCard";
import { TEST_DATA } from "../data/sentence";

const CompleteSentence = (props) => {
  const bgImage = require("../assets/images/BackGroundImage.png");
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
        <View style={styles.word}>
          <FlatList
            data={TEST_DATA}
            renderItem={(itemData) => <WordCard itemData={itemData.item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CompleteSentence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  word: {
    margin: 3,
    flexDirection: "row",
  },
});
