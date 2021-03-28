"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ onPress, disabled, title }) => {
  return (
    <TouchableOpacity style={styles.container} {...{ onPress, disabled }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
