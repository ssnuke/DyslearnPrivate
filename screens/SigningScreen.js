import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Tab = createBottomTabNavigator();

const SigningScreen = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
};

export default SigningScreen;

const styles = StyleSheet.create({});
