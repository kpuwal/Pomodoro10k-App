"use strict";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import { useAppDispatch } from "../../../reduxToolkit/store";

import { createCard } from "../../../reduxToolkit/cardSlice";
import SettingsButton from "../Button";
import ColorBox from "./ColorBox";

const COLORS = ["#FE5E33", "#FFC641", "#BFEAF5", "#442CB9"];

const AddGoal = () => {
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
        <Text>Set a color theme:</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={COLORS}
          renderItem={({ item }) => (
            <ColorBox color={item} onPress={() => pickColor(item)} />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
        <TextInput
          style={styles.input}
          placeholder="Add the goal timeframe"
          textAlign="center"
          value={amount}
          onChangeText={(txt) => setAmount(txt)}
        />
      </View>
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
    // flex: 2 / 7,
  },
  colorPicker: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
  },
});

export default AddGoal;
