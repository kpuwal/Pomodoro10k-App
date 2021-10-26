import React from "react";
import { View,Text, StyleSheet, Dimensions } from "react-native";
import { ThemeProps } from "../../config/StyleGuide";
const { width, height } = Dimensions.get("window");

import MeterIcon from "../../svg/MeterIcon";

interface BrainBoxProps {
  theme: ThemeProps,
  speed: number,
};

const BrainBox = ({ speed, theme }: BrainBoxProps) => {
  console.log("speed  ", speed)
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MeterIcon
          colorBrain={theme.main}
          colorActive={theme.secondary}
          {...{speed}}
        />
      </View>
      <Text style={styles.txt}>Progress</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.21,
    width: width * 0.33,
    marginBottom: "28%",
    // backgroundColor: "#EFF0F4",
    // justifyContent: "flex-end",
    // alignItems: "center",
    // ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  icon: {
    width: 120,
  },
  txt: {
    bottom: -20,
    color: "#EFF0F4",
    fontFamily: "Roboto-Light",
  }
})

export default BrainBox;
