import React from "react";
import { View,Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

interface SpeedBoxProps {
  speed: number,
};

const SpeedBox = ({ speed }: SpeedBoxProps) => {
  return (
    <View style={styles.container}>
      <Text>{speed.toFixed(2)}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.18,
    width: width * 0.43,
    padding: 10,
    backgroundColor: "#1b2033",
    borderRadius: 15,
  }
})

export default SpeedBox;
