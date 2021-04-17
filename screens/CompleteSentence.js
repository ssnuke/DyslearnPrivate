import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CompleteSentence = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text>New CompleteSentence</Text>
    </View>
  );
};

export default CompleteSentence;

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
    },  
});
