"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorBox from "./ColorBox";

const GoalsListItem = ({ textBody, color }) => {
  return (
    <View style={styles.list}>
      <ColorBox {...{ color }} />
      <Text>{textBody}</Text>
      <Text>10k hours</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalsListItem;
