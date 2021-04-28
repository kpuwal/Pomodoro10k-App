"use strict";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface ColorBoxProps {
  color: string;
};

interface ColorMenuProps {
  active: boolean;
  selected: boolean;
  color: string;
  onPress?: () => void;
};

export const ColorMenu = ({ selected, color, active, onPress }: ColorMenuProps) => {
 return (
  <TouchableOpacity disabled={!active} {...{ onPress }}>
    <View style={[
      styles.outlineBox,
      { borderColor: selected && active ? color : "#EFF0F4" }]}>
      <ColorBox color={active ? color : "#fff"} />
      </View>
  </TouchableOpacity>
 )
};

export const ColorBox = ({ color }: ColorBoxProps) => {
  return <View style={[styles.box, { backgroundColor: color }]} />
};

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
  outline: {
    justifyContent: "center",
    alignItems: "center",
    width: 26,
    height: 26,
    margin: 10,
  },
});
