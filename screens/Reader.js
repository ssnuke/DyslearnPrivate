import React, { useState } from "react";
import { View, Text, StyleSheet, Button,Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Reader = (props) => {
  const API_KEY = "AIzaSyBw1f7zCf3Ei68jHdLobtRyGGvwjMlk0sU";
  const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
  const [permissions, setPermissions] = useState(false);
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(null);

  const askPermissionsAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    } else {
      setPermissions(true);
    }
  };

  const takePictureAsync = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!cancelled) {
      setImage(uri);
      setStatus("Loading...");
      try {
        // Call the Google API here
        const result = await callGoogleVisionAsync(base64);
        setStatus(result);
      } catch (error) {
        setStatus(`Error: ${error.message}`);
      }
    } else {
      setImage(null);
      setStatus(null);
    }
  };

  async function callGoogleVisionAsync(image) {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: "LABEL_DETECTION",
              maxResults: 1,
            },
          ],
        },
      ],
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log("callGoogleVisionAsync -> result", result);

    return result.responses[0].labelAnnotations[0].description;
  }

  return (
    <View style={styles.container}>
      {permissions === false ? (
        <Button onPress={askPermissionsAsync} title="Ask permissions" />
      ) : (
        <>
          {image && <Image style={styles.image} source={{ uri: image }} />}
          {status && <Text style={styles.text}>{status}</Text>}
          <Button onPress={takePictureAsync} title="Take a Picture" />
        </>
      )}
    </View>
  );
};

export default Reader;

const styles = StyleSheet.create({
  container:{

  }
});
