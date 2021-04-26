import React from "react";
import { View,Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import MeterIcon from "../../svg/MeterIcon";

interface SpeedBoxProps {
  color: string,
};

const SpeedBox = ({ color }: SpeedBoxProps) => {
  return (
    <View style={styles.container}>
      <View><MeterIcon {...{ color }} /></View>
      <Text style={styles.txt}>Progress</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.21,
    width: width * 0.35,
    // padding: 10,
    // backgroundColor: "#EFF0F4",
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    bottom: -20,
    color: "#EFF0F4",
    fontFamily: "Roboto-Light",
  }
})

export default SpeedBox;
