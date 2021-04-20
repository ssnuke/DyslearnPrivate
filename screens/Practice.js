import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

const Practice = (props) => {
  const [textInput, setTextInput] = useState("");
  const [data, setNewData] = useState([]);

  const changeText = (input) => {
    setTextInput(input);
  };

  const onAddTask = () => {
    setNewData((prevData) => [
      ...prevData,
      { id: Math.random().toString(), value: textInput },
    ]);
    setTextInput("");
    console.log(data);
  };

  return (
    <View>
      <Text>New Practice</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ADD A WORD"
          onChangeText={changeText}
          value={textInput}
        />
        <Button style={styles.button} title="ADD" onPress={onAddTask} />
      </View>
      {/* <ScrollView>
        {data.map((item) => (
          <View key={item} style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={data}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
  },
  button: {
    width: "30%",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
