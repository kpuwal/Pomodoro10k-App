import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeProps } from "../../config/StyleGuide";

const { width } = Dimensions.get("window");

interface DistanceBoxProps {
  total: number,
  timeLeft: number,
  goal: number,
  theme: ThemeProps,
}

const DistanceBox = ({total, timeLeft, goal, theme}: DistanceBoxProps) => {
  const distance = (total / 60) * (1 / goal) * width * 0.79;

  return (
    <View style={styles.container}>
      <View style={[styles.indicatorIcon, {paddingLeft: distance - 4}]}>
        <Text style={[styles.txt, {marginBottom: "1%"}]}>{(total / 60).toFixed(2)}h</Text>
        <FontAwesome5 style={styles.icon} name="map-marker-alt" size={24} color={theme.secondary} />
      </View>
      <View style={styles.lines}>
        <View style={[styles.leadline, {backgroundColor: theme.secondary, width: distance}]} />
        <View style={[styles.line, {backgroundColor: theme.shadeSecondary}]} />
      </View>
      <View style={styles.labels}>
        <Text style={styles.txt2}>0</Text>
        <Text style={styles.txt}>{timeLeft.toFixed(2)}h left</Text>
        <Text style={styles.txt}>{goal}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fcfcfc",
    // borderColor: "#fcfcfc",
    // borderWidth: 5,
    // borderRadius: 15,
    // padding: "1%",
    width: '100%',
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOpacity: 0.2,
    //     // shadowRadius: 5,
    //     shadowOffset: {
    //       width: 3,
    //       height: 4
    //     }
    //   },
    //   android: {
    //     elevation: 5
    //   },
    // }),
  },
  indicatorIcon: {
    // backgroundColor: "pink",
    width: "94%",
    height: "40%",
    justifyContent: "center",
  },
  icon: {
    paddingLeft: "1%",
    paddingBottom: 6,
  },
  leadline: {
    ...StyleSheet.absoluteFillObject,
    height: 5,
    zIndex: 100,
    borderRadius: 5,
  },
  lines: {
    marginTop: 3,
    width: "88%",
    height: "10%",
    zIndex: 3,
  },
  line: {
    width: "100%",
    height: 5,
    // zIndex: 70,
    borderRadius: 5,
  },
  labels: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 8,
  },
  txt: {
    // fontFamily: "Roboto-Light",
    fontSize: 14,
    color: "#fff",
    //  paddingHorizontal: 10,
  },
  txt2: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#fff",
     paddingLeft: "5%",
  },
})

export default DistanceBox;