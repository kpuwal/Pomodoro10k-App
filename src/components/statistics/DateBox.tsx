import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyleGuide from "../../config/StyleGuide";

const { width, height } = Dimensions.get("window");
const DBwidth = width * 0.5;
const DBheight = height * 0.21;

interface DateBoxProps {
  date: {
    weekday: string,
    day: string,
    month: string,
    year: string,
  },
  color: string,
  speed: number,
};

const DateBox = ({ date, color, speed }: DateBoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MaterialCommunityIcons name="clock-fast" size={24} color="#99a2c9" />
        <View style={[styles.txtBox, ]}>
          <View style={{flexDirection: "row", alignItems: "baseline"}}>
          <Text style={[styles.txt, styles.title]}>Speed:</Text>
          <Text style={[styles.txt, styles.speed ]}> {speed.toFixed(2)}</Text>
          <Text style={[styles.txt, styles.title]}>  h/day</Text>
          </View>
        </View>
      </View>
      <View style={[styles.box]}>
        <MaterialCommunityIcons name="trophy-variant" size={24} color="#99a2c9" />
        <View style={[styles.txtBox, ]}>
          <View style={{flexDirection: "column"}}>
            <Text style={[styles.txt, styles.title]}>Due on:
              <Text style={[styles.txt]}>   {date.weekday},</Text>
            </Text>
            <Text style={[styles.txt]}>{date.day} {date.month} {date.year}</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: DBheight,
    width: DBwidth,
    // alignItems: "flex-end",
    justifyContent: "space-around",
    // backgroundColor: "#EFF0F4"
  },
  box: {
    height: "45%",
    width: "100%",
    backgroundColor: "#20263d",
    borderRadius: 10,
    // paddingVertical: "2%",
    justifyContent: "space-between",
    alignItems: "center",
    // alignSelf: "center",
    flexDirection: "row",
    // textAlign: "center",
    paddingLeft: "6%",
  },
  txtBox: {
    width: "78%",
    height: "100%",
    // backgroundColor: "#99a2c9",
    // paddingLeft: "5%",
    // marginLeft: "5%",
    
    // alignItems: "center",
    justifyContent: "center",
    // borderLeftWidth: 1,
  },
  txt: {
    fontWeight: "bold",
    // alignSelf: "flex-start",
    color: "#EFF0F4",
    // fontFamily: "Roboto-Light",
    fontSize: 12,
    // padding: "1%"
  },
  speed: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "#99a2c9",
    fontSize: 12,
  }
})

export default DateBox;
