"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ChartBarProps {
  total: number;
  color: string;
  width: number;
  label: string;
}

const ChartBar = ({ total, color, width, label }: ChartBarProps) => {
  return (
    <View style={{ width, alignItems: "center" }}>
      <View style={styles.container}>
        <Text style={{ color }}>{total}</Text>
        <View
          style={{
            width: width / 3,
            height: total * 5,
            backgroundColor: color,
          }}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    paddingTop: 5,
    color: "white",
    fontWeight: "bold",
  },
});

export default ChartBar;
