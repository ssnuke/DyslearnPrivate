// import React, { useState } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";
// import { Predictions } from "aws-amplify";
// import * as ImagePicker from "expo-image-picker";

// const Reader = (props) => {
//   const [response, setResponse] = useState("Add an Image....");

//   const imagePicker = async () => {
//     let requestPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (requestPermission.granted === false) {
//       alert("Permission to access camera roll is required!");
//       return;
//     }

//     let pickImage = await ImagePicker.launchImageLibraryAsync();

//     if (pickImage.cancelled === true) {
//       return;
//     }
//     console.log(pickImage);
//     const selectedImage = pickImage.uri;
//     const blobImage = await fetch(selectedImage);
//     const myUri  =' https://watermarkly.com/images/add-text-to-photo/sample2.webp'
//     const blob = await blobImage.blob().then();

    
//     identify(mykey)
//   };

//   const identify = async () => {
//     const  mykey = "213d9d0c-bfe0-497f-8a9e-58de1b91bd00.jpg"
//     setResponse("Identifying the text.......");
//     const data = await Predictions.identify({
//       text: {
//         source: { key: mykey },
//         format: "PLAIN",
//       },
//     }).then(setResponse(data.text.fullText));
//   };

//   return (
//     <View>
//       <Button title="Open Image Library" onPress={identify} />
//       <Text>{response}</Text>
//     </View>
//   );
// };

// export default Reader;

// const styles = StyleSheet.create({});
