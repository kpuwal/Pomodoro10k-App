"use strict";
import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import {
  playIcon,
  stopIcon,
  pauseIcon,
  resumeIcon,
} from "../../config/iconsFile";
import { startStop, pauseResume, setMin, setMode } from "../../redux/actions";
import RoundButton from "../modules/home/RoundButton";

import { TimerProps } from "../../redux/reducers/timers";
import { CardProps } from "../../redux/reducers/stats";

const { width } = Dimensions.get("window");

interface ControllerProps {
  start: boolean;
  pause: boolean;
  timer: TimerProps;
  card: CardProps;
}

const Controler = ({ start, pause, timer, card }: ControllerProps) => {
  const dispatch = useDispatch();
  const startStopCount = () => dispatch(startStop());
  const pauseResumeCount = (value: boolean) => dispatch(pauseResume(value));

  const toggleStartStop = () => {
    startStopCount();
    pauseResumeCount(false);
    dispatch(setMin(timer.data.focus));
    dispatch(setMode(0));
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
