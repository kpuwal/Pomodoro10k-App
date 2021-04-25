import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import TrophyIcon from "../../svg/TrophyIcon";

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
      <TrophyIcon />
      <View style={styles.data}>

        <Text style={styles.txt}>{date.weekday}, {date.day} {date.month} {date.year}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.18,
    width: width * 0.43,
    // borderRadius: 15,
    alignItems: "flex-end",
    justifyContent: "space-around",
    paddingRight: "10%",
    // backgroundColor: "#EFF0F4"
  },
  data: {
    // height: "40%",
    // width: "100%",
    // borderRadius: 10,
    // marginTop: "8%",
  },
  txt: {
    alignSelf: "center",
    color: "white",
    fontFamily: "Roboto-Light",
    fontSize: 20,
  }
})

export default DateBox;
