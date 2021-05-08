import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";

const Home = ({ navigation }) => {
  const bgImage = require("../assets/images/BackGroundImage.png");

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", function () {
      return true;
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
        <View style={styles.touchableContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate("Practice")}
          >
            <Text style={styles.text}> Practice</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.touchableContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate("Test")}
          >
            <Text style={styles.text}> Test</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.touchableContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Complete Sentence")}
            style={styles.touchable}
          >
            <Text style={styles.text}>Complete Sentence</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  touchableContainer: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242433",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
