"use strict";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Platform, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../reduxToolkit/store";

import { createCard } from "../../../reduxToolkit/slices/cardSlice";
import SettingsButton from "../Button";
import ColorBox from "./ColorBox";

const COLORS = ["#FE5E33", "#FFC641", "#BFEAF5", "#442CB9"];
const COLOR_THEMES = [
  { idx: 0, color: "#FE5E33", state: true },
  { idx: 1, color: "#FFC641", state: true },
  { idx: 2, color: "#BFEAF5", state: true },
  { idx: 3, color: "#442CB9", state: true },
];

const AddGoal = () => {
  const colors = useSelector((state: RootState) => state.colorsList);
console.log(colors)
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const dispatch = useAppDispatch();

  const pickColor = (col: string) => {
    setColor(col);
  };

  const handleCreateGoal = () => {
    dispatch(createCard({color, title}));
    setTitle("");
    setAmount("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.colorPicker}>
        <Text>color theme:</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={COLOR_THEMES}
          renderItem={({ item }) => (
            <ColorBox color={item.color} onPress={() => pickColor(item.color)} />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
      </View>
      <TextInput
          style={styles.input}
          placeholder="Add the goal timeframe"
          textAlign="center"
          value={amount}
          onChangeText={(txt) => setAmount(txt)}
        />
      <TextInput
        style={styles.input}
        placeholder="add a new goal"
        textAlign="center"
        value={title}
        onChangeText={(txt) => setTitle(txt)}
      />
      <SettingsButton
        title="Create Goal"
        onPress={() => handleCreateGoal()}
        disabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    // backgroundColor: "#F5F7FA",
    justifyContent: "space-around",
    paddingBottom: "10%",
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOpacity: 0.2,
    //     // shadowRadius: 5,
    //     shadowOffset: {
    //       width: 2,
    //       height: 3
    //     }
    //   },
    //   android: {
    //     elevation: 5
    //   },
    // })
  },
  colorPicker: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
  },
});

export default AddGoal;
