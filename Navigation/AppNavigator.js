import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "aws-amplify";

import Home from "../screens/Home";
import Practice from "../screens/Practice";
import Reader from "../screens/Reader";
import CompleteSentence from "../screens/CompleteSentence";
import { Button } from "react-native";

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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => {
            return <Button title="Logout" onPress={signOut}/>;
          },
        }}
      />
      <Stack.Screen name="Practice" component={Practice} />
      <Stack.Screen name="Reader" component={Reader} />
      <Stack.Screen name="CompleteSentence" component={CompleteSentence} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
