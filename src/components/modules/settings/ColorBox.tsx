"use strict";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const ColorBox = React.memo(({ col, onPress }) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <View style={[styles.outlineBox, { borderColor: col }]}>
        <View style={[styles.box, { backgroundColor: col }]} />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  outlineBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 1,
    margin: 10,
  },
});

export default ColorBox;
