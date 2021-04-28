"use strict";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Platform, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../reduxToolkit/store";

import { createCard } from "../../../reduxToolkit/slices/cardSlice";
import { ColorProps, pickColor } from "../../../reduxToolkit/slices/colorSlice";

import SettingsButton from "../Button";
import ColorBox from "./ColorBox";
import { StyleGuide } from "../../../config/StyleGuide";

const AddGoal = () => {
  const colors = useSelector((state: RootState) => state.color.colorsList);

  const filteredColors = colors.filter((item) => {
    return item.active === true;
  });
  console.log("COLORS ", filteredColors)
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [theme, setTheme] = useState<ColorProps>(
    { idx: 1, theme: StyleGuide.themeB, active: true }
    );
  const dispatch = useAppDispatch();

  const pickCol = (theme: ColorProps) => {
    setTheme(theme);
  };

  const handleCreateGoal = () => {
    dispatch(createCard({theme, title}));
    dispatch(pickColor(theme.idx));
    setTitle("");
    setAmount("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.colorPicker}>
        <Text>color theme:</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredColors}
          renderItem={({ item }) => (
            <ColorBox color={item.theme.main} onPress={() => pickCol(item)} />
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
