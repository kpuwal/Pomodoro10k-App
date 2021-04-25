import React from "react";
import { View,Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import MeterIcon from "../../svg/MeterIcon";

interface SpeedBoxProps {
  speed: number,
  color: string,
};

const SpeedBox = ({ speed, color }: SpeedBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, styles.slow]}>Slow</Text>
      <Text style={styles.medium}>Medium</Text>
      <Text style={[styles.txt, styles.fast]}>Fast</Text>
      <View style={styles.pic}>
        <MeterIcon {...{ color }} />
        <Text style={[styles.number, {color}]}>{speed.toFixed(2)}</Text>
        <Text style={[styles.number2, {color}]}>h/day</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.18,
    width: width * 0.43,
    // padding: 10,
    // backgroundColor: "#EFF0F4",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    ...StyleSheet.absoluteFillObject,
   
    // alignSelf: "flex-end",
    // color: "#1b2033",
    color: "#99a2c9",
    // marginTop: "60%",
    // marginLeft: "5%",
    fontSize: 11,
    // fontFamily: "Roboto-Light",
  },
  slow: {
    paddingTop: "30%",
    paddingLeft: "10%",
    color: "#F76B6B",
    // justifyContent: "center",
  },
  medium: {
    fontSize: 11,
    paddingVertical: "5%",
    // paddingLeft: "10%",
    alignSelf: "center",
    color: "#99a2c9",
  },
  fast: {
    paddingTop: "30%",
    paddingLeft: "80%",
  },
  pic: {
    // justifyContent: "center",
    alignSelf: "center",
  },
  number: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    paddingTop: "50%",
    paddingLeft: "34%",
    fontWeight: "bold",
  },
  number2: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    paddingTop: "69%",
    paddingLeft: "39%",
    fontSize: 9,
    // fontWeight: "bold",
  }
})

export default SpeedBox;
