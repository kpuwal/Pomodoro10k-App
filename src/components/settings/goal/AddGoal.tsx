"use strict";
import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../reduxToolkit/store";

import { createCard } from "../../../reduxToolkit/slices/cardSlice";
import { ColorProps, pickColor } from "../../../reduxToolkit/slices/colorSlice";

import SettingsButton from "../Button";
import { ColorMenu } from "./ColorBox";
import StyleGuide from "../../../config/StyleGuide";

const AddGoal = () => {
  const colors = useSelector((state: RootState) => state.color.colorsList);
  const dummy = { idx: 100, theme: StyleGuide.themeB, active: true };
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [theme, setTheme] = useState<ColorProps>(dummy);
  const dispatch = useAppDispatch();
  console.log("COLORS ", colors)
  const pickCol = (theme: ColorProps) => {
    setTheme(theme);
  };

  const handleCreateGoal = () => {
    console.log("theme from creation ", theme)
    dispatch(createCard({amount, theme, title}));
    dispatch(pickColor(theme.idx));
    setTitle("");
    setAmount(0);
    setTheme(dummy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.colorPicker}>
        <Text>color theme:</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={colors}
          renderItem={({ item }) => (
            <ColorMenu
              selected={theme.idx === item.idx}
              active={item.active}
              color={item.theme.main}
              onPress={() => pickCol(item)} />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
      </View>
      <TextInput
          style={styles.input}
          placeholder="Add the goal timeframe"
          textAlign="center"
          value={amount.toString()}
          onChangeText={(txt) => setAmount(parseInt(txt, 10))}
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
        disabled={title !== "" && amount !== 0 && theme.idx !== 100 ? false : true}
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
