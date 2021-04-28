import React from "react";
import { View,Text, StyleSheet, Dimensions } from "react-native";
import { ThemeProps } from "../../config/StyleGuide";
const { width, height } = Dimensions.get("window");

import MeterIcon from "../../svg/MeterIcon";

interface SpeedBoxProps {
  theme: ThemeProps,
  speed: number,
};

const SpeedBox = ({ speed, theme }: SpeedBoxProps) => {
  return (
    <View style={styles.container}>
      <View><MeterIcon colorBrain={theme.main} colorActive={theme.secondary} /></View>
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
