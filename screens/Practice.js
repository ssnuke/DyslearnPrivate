import React,{useState} from "react";
import { View, Text, StyleSheet,Button,TextInput, FlatList } from "react-native";


const Practice = (props) => {
  const [textInput,setTextInput] = useState('');
  const [data,setNewData] = useState([]);
 
  const onAddTask = ()=>{
    const newData = data.slice();
    newData.push(textInput);
    setNewData(newData);
    console.log(newData);
  }
  const item = (data) => {
    <View>
      <Text>{data}</Text>
      
    </View>
  }

  return (
    <View>
      <Text>New Practice</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="ADD A WORD"
        onChangeText={(text)=>setTextInput(text)}
        value = {textInput}
      />
      <Button
        style={styles.button}
        title= "ADD"
        onPress={onAddTask}
      />
      
      </View>
      <FlatList
       data = {data}
       renderItem = {item}
      />
      
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  inputContainer : {
    flexDirection : 'row',
    width : '100%',
  },
  input :{
    borderWidth : 1,
    borderColor : '#ccc',
    width : '70%',
  },
  button : {
    width : '30%',
  }
  
});
