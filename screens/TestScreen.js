import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from "../src/graphql/mutations";
import * as queries from "../src/graphql/queries";

import TestCard from "../components/TestCard";

const TestScreen = (props) => {
  const [data, setNewData] = useState([]);
  const bgImage = require("../assets/images/BackGroundImage.png");

  useEffect(() => {
    (async () => {
      const cloudData = await API.graphql({ query: queries.listTodos });
      let newData = cloudData.data.listTodos.items;
      newData.map((mydata) =>
        setNewData((prevData) => [
          ...prevData,
          { id: mydata.id, value: mydata.name, img: mydata.image },
        ])
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.image}>
        <View style={styles.cardContainer}>
          <FlatList
            data={data}
            renderItem={(itemData) => (
              <TestCard
                word={itemData.item.value}
                wordImage={itemData.item.img}
              />
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  cardContainer: {},
});
