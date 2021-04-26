import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import Practice from "../screens/Practice";
import Reader from '../screens/Reader';

const AppNavigator = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Practice' component={Practice} />
      <Stack.Screen name='Reader' component={Reader} />
    </Stack.Navigator>
  );
};

export default AppNavigator;