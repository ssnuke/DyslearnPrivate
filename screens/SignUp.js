import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react/cjs/react.development";

import firebase from "../firebase/firebase";

const SignUp = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;


  const validate = () => {
    if(emailRegex.test(email)){
      setIsValid(true);
    }else if(email === ""){
      Alert.alert("Enter an Email"); 
    }else{
      setIsValid(false);
      Alert.alert("Please enter a valid email!");
    }
    if(password === ""){
      Alert.alert("Enter Password");
    }
    if(isValid){
      signUp();
    }
  };

  const signUp = async () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate("SignIn");
      console.log("successfully signed up!");
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={() => validate()} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
