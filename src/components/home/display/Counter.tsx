"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.session.session);

  return (
    <>
      <Text style={styles.txt}>
        {count.min.toString().padStart(2, "0")}:
        {count.sec.toString().padStart(2, "0")}
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
