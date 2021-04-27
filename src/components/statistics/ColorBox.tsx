"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";

interface ColorBoxProps {
  colors: string[],
}

const ColorBox = ({ colors }: ColorBoxProps) => {
  return (
    <View style={styles.container}>
        {colors.map((color, idx) => (
          <View
            key={idx}
            style={[styles.square, { backgroundColor: color }]}
          />
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  square: {
    borderRadius: 2,
    width: 5,
    height: 5,
    margin: 1,
  },
});

export default ColorBox;
