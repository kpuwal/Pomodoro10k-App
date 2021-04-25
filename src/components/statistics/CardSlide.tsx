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
      <Text style={styles.title}>Habit Pattern</Text>
      <WeeklyChart {...{ weekdaysTotals, color }} />
      <Text style={[styles.title, {color: "#EFF0F4"}]}>Distance</Text>
      <DistanceBox goal={10000} {...{ total, timeLeft, color }} />
      <View style={[styles.speedDateBox, { width }]}>
        <View style={styles.box}>
          <Text style={[styles.title, {color: "#EFF0F4"}]}>Progress</Text>
          <SpeedBox {...{ speed, color }} />
        </View>
        <View style={styles.box}>
          <Text style={[styles.title, {color: "#EFF0F4"}]}>Due on</Text>
          <DateBox {...{ date }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow", 
    // alignItems: "center",
    borderRadius: 25,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center"
  },
  txt: {
    paddingTop: 15,
  },
  staTxt: {
    color: "white",
  },
  title: {
    marginTop: "2%",
    marginBottom: "1%",
    fontFamily: "Roboto-Light",
    alignItems: "flex-start",
  },
  speedDateBox: {
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "stretch"
    // height: "70%",
    // width: "100%"
  },
  box: {
    flexDirection: "column",
  }
});

export default CardSlide;

{/* <Text style={[styles.staTxt, styles.title]}>STATISTICS</Text>
      <Text style={styles.staTxt}>Total time: {(total / 60).toFixed(2)} hours</Text>
      <Text style={styles.staTxt}>
        Time left to achieve the goal: {timeLeft.toFixed(2)} hours
      </Text>
      <Text style={styles.staTxt}>Speed: {speed.toFixed(2)} hours per day</Text>
      <Text style={styles.staTxt}>You will achieve the goal on:</Text>
      <Text style={styles.staTxt}>
        {date.weekday} {date.day}th of {date.month} {date.year}
      </Text> */}
