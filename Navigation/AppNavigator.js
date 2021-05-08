import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "aws-amplify";

import Home from "../screens/Home";
import Practice from "../screens/Practice";
// import Reader from "../screens/Reader";
import CompleteSentence from "../screens/CompleteSentence";
import Test from "../screens/TestScreen";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppNavigator = (props) => {
  const Stack = createStackNavigator();

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#064e9e" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => {
            // return <Button title="Logout" onPress={signOut} />
            return (
              <TouchableOpacity onPress={signOut} style={{ marginRight: 10 }}>
                <MaterialCommunityIcons name="logout" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="Practice" component={Practice} />
      <Stack.Screen name="Test" component={Test} />
      {/* <Stack.Screen name="Reader" component={Reader} /> */}
      <Stack.Screen name="Complete Sentence" component={CompleteSentence} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
