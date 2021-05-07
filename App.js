import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";
import Amplify, { Auth } from "aws-amplify";
import config from  './src/aws-exports';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure(config);
Amplify.configure(awsconfig);

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withAuthenticator(App);
