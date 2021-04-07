"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorBox from "./ColorBox";

interface GoalsListItemProps {
  textBody: string;
  color: string;
};

const GoalsListItem = ({ textBody, color }: GoalsListItemProps) => {
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
