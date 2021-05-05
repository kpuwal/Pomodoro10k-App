"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ModeProps {
  start: boolean;
  infoMode: string;
}

const Mode = ({ start, infoMode }: ModeProps) => {
  return (
    <View style={styles.container}>
      {start ? <Text style={styles.txt}>{infoMode}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
  },
  txt: {
    justifyContent: "center",
    fontFamily: "Roboto-Light",
    fontSize: 20,
    color: "#EFF0F4",
    alignSelf: "center",
  },
});

export default Mode;
