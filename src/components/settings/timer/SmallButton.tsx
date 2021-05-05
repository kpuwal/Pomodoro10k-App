"use strict";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SmallButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}

const SmallButton = ({ title, onPress, disabled }: SmallButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...{ onPress, disabled }}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ".5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f9",
    borderRadius: 5,
    width: 40,
    height: 30,
  },
  txt: {
    fontSize: 16,
    color: "#29304D",
    fontFamily: "Roboto-Light"
  }
});

export default SmallButton;

// #f7f7f9 #f4f3ef