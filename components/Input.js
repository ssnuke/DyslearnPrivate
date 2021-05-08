import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Input = (props) => {
  const { visible, onClose } = props;
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

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
      <View>
        <TextInput placeholder="Add Text" onChangeText={setText} value={text} />
        <Button title="Select Image" onPress={imagePicker} />
        <Image source={{ uri: selectedImage }} style={styles.image} />
        <Button title="Submit" onPress={sendData} />
      </View>
    </Modal>
  );
};

export default Input;

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 100,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
