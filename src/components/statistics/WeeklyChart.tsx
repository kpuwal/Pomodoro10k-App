"use strict";
import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

import ChartBar from "./ChartBar";
import { DAYS } from "../../config/constants";

const { width, height } = Dimensions.get("window");

interface WeeklyChartProps {
  color: string;
  weekdaysTotals: number[];
};

const WeeklyChart = ({ weekdaysTotals, color }: WeeklyChartProps) => {
  return (
    <View style={styles.container}>
      {weekdaysTotals.map((item: number, idx: number) => (
        <ChartBar
          key={idx}
          total={item}
          color={color}
          width={width / 10}
          label={DAYS[idx]!}
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
