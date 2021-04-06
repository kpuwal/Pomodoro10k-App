"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ListLabelProps {
  focus: number;
  relax: number;
};

const ListLabel = ({ focus, relax }: ListLabelProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.name}>focus:</Text>
        <Text style={styles.name}>relax:</Text>
      </View>
      <View style={styles.labels}>
        <Text style={styles.amount}>{focus}</Text>
        <Text style={styles.amount}>{relax}</Text>
      </View>
      <View style={styles.labels}>
        <Text style={[styles.name, { paddingLeft: 5 }]}>min</Text>
        <Text style={[styles.name, { paddingLeft: 5 }]}>min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  labels: {
    flexDirection: "column",
  },
  name: {
    color: "#8D91A1",
  },
  amount: {
    fontWeight: "bold",
    paddingLeft: 20,
    color: "#29304D",
  },
});

export default ListLabel;
