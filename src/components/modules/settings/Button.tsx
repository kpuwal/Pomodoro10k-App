"use strict";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyleGuide from "../../../config/StyleGuide";

interface IButton {
  onPress: () => void;
  disabled: boolean;
  title: string,
}

const Button = ({ onPress, disabled, title }: IButton) => {
  return (
    <TouchableOpacity {...{ onPress, disabled }}>
      <View style={styles.container}>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: StyleGuide.palette.main.primary,
  },
  txt: {
    color: "white",
  }
});

export default Button;
