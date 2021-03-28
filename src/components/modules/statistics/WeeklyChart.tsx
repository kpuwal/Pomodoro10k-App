"use strict";
import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import ChartBar from "./ChartBar";

const { width, height } = Dimensions.get("window");
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeeklyChart = ({ weekdaysTotals, color }) => {
  return (
    <View style={styles.container}>
      {DAYS.map((item, idx) => (
        <ChartBar
          key={idx}
          value={weekdaysTotals[idx]}
          color={color}
          width={width / 10}
          label={item}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: height * 0.25,
    width: width - 120,
  },
});

export default WeeklyChart;
