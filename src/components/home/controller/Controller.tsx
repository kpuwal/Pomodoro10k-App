"use strict";
import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { useAppDispatch } from "../../../reduxToolkit/store";

import {
  playIcon,
  stopIcon,
  pauseIcon,
  resumeIcon,
} from "../../../config/iconsFile";

import { startCounter, pauseCounter } from "../../../reduxToolkit/slices/counterSlice";
import RoundButton from "./RoundButton";

import { CardProps } from "../../../reduxToolkit/models";

const { width } = Dimensions.get("window");

interface ControllerProps {
  start: boolean;
  pause: boolean;
  card: CardProps;
}

const Controler = ({ start, pause, card }: ControllerProps) => {
  const dispatch = useAppDispatch();
  const startStopCount = () => dispatch(startCounter());
  const pauseResumeCount = (value: boolean) => dispatch(pauseCounter(value));

  const toggleStartStop = () => {
    startStopCount();
    pauseResumeCount(false);
  };

  return (
    <View style={styles.container}>
      <RoundButton
        size={width * 0.2}
        type={start ? stopIcon : playIcon}
        colorStripe={card.color}
        disabled={false}
        onPress={() => toggleStartStop()}
      />
      <View style={{ paddingTop: "25%" }}>
        <RoundButton
          size={width * 0.1}
          type={pause ? resumeIcon : pauseIcon}
          colorStripe= "#29304D"
          disabled={!start}
          onPress={() => pauseResumeCount(!pause)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: "37%",
    paddingRight: "20%",
    alignItems: "center",
  },
});

export default Controler;
