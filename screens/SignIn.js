import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput, Button,Alert } from "react-native";
import firebase from '../firebase/firebase';

const SignIn = (props) => {
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
      signIn();
    }
  };

  const signIn = async () => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
      console.log("successfully signed In the app!");
    } catch (err) {
      console.log(err);
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
      <Button title="Sign In" onPress={() => validate()} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
