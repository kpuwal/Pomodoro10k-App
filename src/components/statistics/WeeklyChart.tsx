"use strict";
import React from "react";
import { View, Platform, Dimensions, StyleSheet } from "react-native";

import ChartBar from "./ChartBar";
import { DAYS } from "../../config/constants";

const { width } = Dimensions.get("window");

interface WeeklyChartProps {
  color: string;
  weekdaysTotals: number[];
}

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
    padding: "5%",
    backgroundColor: "#fcfcfc",
    borderColor: "#e0e0e0",
    borderWidth: 0,
    borderRadius: 15,
    flexDirection: "row",
    height: "30%",
    width: "100%",
    alignItems: "flex-end",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.1,
        // shadowRadius: 5,
        shadowOffset: {
          width: 3,
          height: 4
        }
      },
      android: {
        elevation: 5
      },
    }),
  },
  title: {
   fontFamily: "Roboto-Light",
  }
});

export default WeeklyChart;
