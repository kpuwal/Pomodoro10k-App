"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import useInterval from "../../modules/home/useInterval";

const Message = ({ messageOver }) => {
  const message = useSelector((state) => state.session.message);
  useInterval(() => messageOver(), 5000);

  return (
    <>
      <Text style={styles.txt}>{message}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    flex: 1 / 5,
    justifyContent: "center",
    fontFamily: "Roboto-Light",
    fontSize: 50,
    textAlign: "center",
    color: "#EFF0F4",
    alignSelf: "center",
  },
});

export default Message;
