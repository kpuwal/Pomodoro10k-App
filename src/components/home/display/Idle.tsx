"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Idle = () => {
  const selectedSession = useSelector((state) => state.session.selected);

  return (
    <>
      <Text style={styles.txt}>
        {selectedSession.min.toString().padStart(2, "0")}:
        {selectedSession.sec.toString().padStart(2, "0")}
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

export default Idle;
