"use strict";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SmallButtonProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
};

const SmallButton = ({ title, onPress, disabled }: SmallButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...{ onPress, disabled }}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 30,
    height: 30,
  },
  txt: {
    fontSize: 15,
  }
});

export default SmallButton;
