"use strict";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Mode = () => {
  const sessionType = useSelector((state) => state.session.mode);
  const start = useSelector((state) => state.counter.start);

  return (
    <View style={styles.container}>
      {start ? <Text style={styles.txt}>{sessionType}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
  },
  txt: {
    justifyContent: "center",
    fontFamily: "Roboto-Light",
    fontSize: 20,
    color: "#EFF0F4",
    alignSelf: "center",
  },
});

export default Mode;
