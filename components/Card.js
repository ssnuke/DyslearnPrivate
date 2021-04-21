import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

const Card = (props) => {
  const { text, onSelect } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [img, setImg] = useState(false);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage(pickerResult.uri);

    if (selectedImage !== null) {
      setImg(true);
    }else{
        setImg(false);
    }
  };

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>{text.toUpperCase()}</Text>
        {img ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.readButton}
            onPress={openImagePickerAsync}
          >
            <View style={styles.imageButton}>
              <Text>ADD Image</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onSelect} style={styles.readButton}>
            <View>
              <Text>Speak Aloud</Text>
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
    // height:'100%',
  },
  itemContainer: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 200,
    justifyContent: "space-between",
  },
  textContainer: {
    textAlign: "center",
    fontSize: 23,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:5,
    marginBottom: 10,
  },
  imageButton: {
    
  },
  readButton: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 4,
  },
  image: {
    marginHorizontal: 100,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
