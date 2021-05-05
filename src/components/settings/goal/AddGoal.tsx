"use strict";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
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
  const [amount, onChangeNumber] = useState<number>(null);
  const [theme, setTheme] = useState<ColorProps>(dummy);
  const dispatch = useAppDispatch();

  const pickCol = (theme: ColorProps) => {
    setTheme(theme);
  };

  const handleCreateGoal = () => {
    dispatch(createCard({amount, theme, title}));
    dispatch(pickColor(theme.idx));
    setTitle("");
    onChangeNumber(0);
    setTheme(dummy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.colorPicker}>
        <View>
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
      </View>
      <TextInput
          style={styles.input}
          numeric
          placeholder="add goal timeframe"
          textAlign="center"
          keyboardType={"numeric"}
          onChangeText={num => onChangeNumber(num)}
          value={amount}
          underlineColorAndroid="transparent"
        />
      <TextInput
        style={styles.input}
        placeholder="add new goal"
        textAlign="center"
        value={title}
        onChangeText={(txt) => setTitle(txt)}
        underlineColorAndroid="transparent"
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
  },
  colorPicker: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    // height: 50,
  },
});

export default AddGoal;
