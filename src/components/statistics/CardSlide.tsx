"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import WeeklyChart from "./WeeklyChart";
import DistanceBox from "./DistanceBox";
import SpeedBox from "./SpeedBox";
import DateBox from "./DateBox";
import { CardProps } from "../../reduxToolkit/models";

interface ICardProps extends CardProps {
  width: number;
  height: number;
};

const CardSlide = ({
  weekdaysTotals,
  goal,
  theme,
  width,
  height,
  total,
  speed,
  timeLeft,
  date
}: ICardProps) => {
  const newTitle = goal.toUpperCase();

  return (
    <View style={{ width, height }}>
      <Text style={[styles.header, { color: theme.main }]}>{newTitle}</Text>
      <Text style={styles.title}>Habit Pattern</Text>
      <WeeklyChart color={theme.main} {...{ weekdaysTotals }} />
      <Text style={[styles.title, {color: "#EFF0F4"}]}>Distance</Text>
      <DistanceBox goal={10000} {...{ total, timeLeft, theme }} />
      <View style={[styles.speedDateBox, { width }]}>
        <DateBox {...{ date, theme, speed }} />
        <SpeedBox {...{ speed, theme }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 15,
  },
  title: {
    marginTop: "2%",
    marginBottom: "1%",
    fontFamily: "Roboto-Light",
    alignItems: "flex-start",
  },
  speedDateBox: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CardSlide;
