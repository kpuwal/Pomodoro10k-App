"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";

import useInterval from "../../modules/home/useInterval";

interface MessageProps {
  messageOver: () => void;
  message: string;
};

const Message = ({ messageOver, message }: MessageProps) => {
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
