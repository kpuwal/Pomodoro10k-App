"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { SessionProps } from "../../../redux/reducers/session";

interface CounterProp {
  session: SessionProps;
}

const Counter = ({ session }: CounterProp) => {
  return (
    <>
      <Text style={styles.txt}>
        {session.min.toString().padStart(2, "0")}:
        {session.sec.toString().padStart(2, "0")}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    flex: 1 / 5,
    justifyContent: "center",
    fontFamily: "Roboto-Light",
    fontSize: 100,
    color: "#EFF0F4",
    alignSelf: "center",
  },
});

export default Counter;
