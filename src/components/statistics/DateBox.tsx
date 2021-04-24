import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Calendar from "../../svg/Calendar";

const { width, height } = Dimensions.get("window");

interface DateBoxProps {
  date: {
    weekday: string,
    day: string,
    month: string,
    year: string,
  },
};

const DateBox = ({ date }: DateBoxProps) => {
  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.data}>
        <Text style={styles.txt}>{date.weekday},</Text>
        <Text style={styles.txt}>{date.day} {date.month} {date.year}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.18,
    width: width * 0.43,
    padding: 10,
    // backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  data: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: "center",
    // alignItems: "flex-start",
    paddingLeft: "18%",
    paddingTop: "50%"
  },
  txt: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Roboto-Light",
    fontSize: 20,
  }
})

export default DateBox;
