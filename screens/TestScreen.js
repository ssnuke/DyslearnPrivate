import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

import TestCard from '../components/TestCard';

const TestScreen = (props) => {
  const [data, setNewData] = useState([]);

  useEffect(() => {
    (async () => {
      const cloudData = await API.graphql({ query: queries.listTodos });
      let newData = cloudData.data.listTodos.items;
      newData.map((mydata) => setNewData((prevData) => [...prevData, mydata]));
    })();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FlatList data={data} renderItem={(itemData) => <TestCard word={itemData.item.name} wordImage={itemData.item.image}/>}/>
      </View>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {},
});
