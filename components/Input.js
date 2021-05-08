import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Input = (props) => {
  const { visible, onClose } = props;
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const bgImage = require("../assets/images/BackGroundImage.png");

  const imagePicker = async () => {
    let requestPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (requestPermission.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickImage = await ImagePicker.launchImageLibraryAsync();
    if (pickImage.cancelled === true) {
      return;
    }
    setSelectedImage(pickImage.uri);
  };

  const sendData = () => {
    onClose(text, selectedImage);
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <View style={styles.modalContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Add Text"
              onChangeText={setText}
              value={text}
              style={styles.inputBox}
            />
            <View style={styles.touchableContainer}>
              <TouchableOpacity style={styles.touchable} onPress={imagePicker}>
                <Text style={styles.text}>Select Image</Text>
              </TouchableOpacity>
            </View>
            {/* <Button title="Select Image" onPress={imagePicker} /> */}

            <Image source={{ uri: selectedImage }} style={styles.image} />

            <View style={styles.touchableContainer}>
              <TouchableOpacity style={styles.touchable} onPress={sendData}>
                <Text style={styles.text}>Submit Card</Text>
              </TouchableOpacity>
            </View>

            {/* <Button title="Submit" onPress={sendData} /> */}
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  inputBox: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "white",
    color: 'black',
    height: 60,
  },
  touchableContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    height: 50,
    width: 200,
    backgroundColor: "#242433",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  image: {
    marginVertical: 40,
    marginLeft: 50,
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});
