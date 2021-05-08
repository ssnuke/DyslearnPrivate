import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = (props) => {
  const { text, onSelect, cloudImage } = props;

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>{text}</Text>

        <Image source={{ uri: cloudImage }} style={styles.image} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onSelect} style={styles.readButton}>
            <View>
              <MaterialCommunityIcons
                name="text-to-speech"
                size={24}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
  },
  itemContainer: {
    backgroundColor: "#a6b9bd",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 20,
    height: 250,
    justifyContent: "space-between",
  },
  textContainer: {
    fontSize: 23,
    fontWeight:'bold',
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  readButton: {
    padding: 10,
    backgroundColor: "#2c9c67",
    borderRadius: 4,
  },
  image: {
    marginLeft: 80,
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
});
