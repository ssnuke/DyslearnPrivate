import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";
import Amplify, { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import config from "./src/aws-exports";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import Predictions, {
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions";
Amplify.configure(config);
Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

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
