import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

const Card = (props) => {
  const { text, onSelect, onDelete, onImageAdd } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [cloudImage, setCloudImage] = useState("");
  const [imageName,setImageName] = useState('');
  

  useEffect(() => {
    // getImage();
    // console.log(cloudImage);
  });

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
    
    const imageUri = pickerResult.uri;
    const response = await fetch(imageUri);
    let myname = pickerResult.uri.replace(/^.*[\\\/]/, "");
    const blob = await response.blob();
    await Storage.put(myname, blob, {
      contentType: "image/jpeg",
    });
    onImageAdd(myname,text);
  };

  // const getImage = async () => {
  //   setCloudImage(
  //     await Storage.get(imageName, {
  //       contentType: "image/jpeg",
  //     })
  //   );
  // };

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>{text.toUpperCase()}</Text>
        <View>
          <Button title="Delete" onPress={onDelete} />
        </View>

        {/* <Image  source={{uri: cloudImage}} style={styles.image}/> */}
        <Image source={{ uri: selectedImage }} style={styles.image} />

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
    marginHorizontal: 5,
    marginBottom: 10,
  },
  imageButton: {},
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
