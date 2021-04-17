import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View styles={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Practice")}
          style={styles.button}
        >
          Practice
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Practice")}
          style={styles.button}
        >
          Practice
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Practice")}
          style={styles.button}
        >
          Practice
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Practice")}
          style={styles.button}
        >
          Practice
        </Button>
        <View style={styles.loginContainer}>
          <Button style={styles.login} color="white">
            Login
          </Button>
          <Button style={styles.logout} color="white">
            Logout
          </Button>
        </View>
        <View style={styles.exitContainer}>
          <Button style={styles.exitButton} color="white">EXIT</Button>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  buttonContainer: {
    backgroundColor: "blue",
  },
  button: {
    marginTop: 65,
    marginHorizontal: 30,
  },
  loginContainer: {
    marginTop: 90,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  login: {
    backgroundColor: "#83d15e",
  },
  logout: {
    backgroundColor: "#ed6868",
  },
  exitContainer: {
    marginTop:50,
    backgroundColor:'#ff0a0a',
    marginHorizontal:120,
  },
  exitButton:{
  },
});
