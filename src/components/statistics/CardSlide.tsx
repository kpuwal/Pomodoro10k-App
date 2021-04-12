"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import WeeklyChart from "./WeeklyChart";
import { CardProps } from "../../redux/models/Card";

interface ICardProps extends CardProps {
  width: number;
  height: number;
};

const CardSlide = ({
  weekdaysTotals,
  goal,
  color,
  width,
  height,
  total,
  speed,
  timeLeft,
  date
}: ICardProps) => {
  const newTitle = goal.toUpperCase();

  return (
    <View style={[styles.container, { ...{ width, height } }]}>
      <Text style={[styles.txt, styles.header, { color: color }]}>
        {newTitle}
      </Text>
      <WeeklyChart {...{ weekdaysTotals, color }} />
      <Text style={[styles.staTxt, styles.title]}>STATISTICS</Text>
      <Text style={styles.staTxt}>Total time: {(total / 60).toFixed(2)} hours</Text>
      <Text style={styles.staTxt}>
        Time left to achieve the goal: {timeLeft.toFixed(2)} hours
      </Text>
      <Text style={styles.staTxt}>Speed: {speed.toFixed(2)} hours per day</Text>
      <Text style={styles.staTxt}>You will achieve the goal on:</Text>
      <Text style={styles.staTxt}>
        {date.weekday} {date.day}th of {date.month} {date.year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
  },
  header: {
    fontWeight: "bold",
  },
  txt: {
    paddingVertical: 15,
  },
  staTxt: {
    color: "white",
  },
  title: {
    paddingVertical: 50,
    fontWeight: "bold",
  },
});

export default CardSlide;
