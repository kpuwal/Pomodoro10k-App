"use strict";
import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  playIcon,
  stopIcon,
  pauseIcon,
  resumeIcon,
} from "../../config/iconsFile";
import { startStop, pauseResume, setMin, setMode } from "../../redux/actions";
import RoundButton from "../modules/home/RoundButton";

const { width } = Dimensions.get("window");

const Controler = () => {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.counter.start);
  const pause = useSelector((state) => state.counter.pause);
  const timer = useSelector((state) => state.timers.selected.data);
  const card = useSelector((state) => state.stats.selected);
  const startStopCount = () => dispatch(startStop());
  const pauseResumeCount = (value) => dispatch(pauseResume(value));

  const toggleStartStop = () => {
    startStopCount();
    pauseResumeCount(false);
    dispatch(setMin(timer.focus));
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
