"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useAppDispatch } from "../../../reduxToolkit/store";

import TimerIcon from "./TimerIcon";
import { TimerProps } from '../../../redux/models/Timer';
import { selectTimer } from "../../../reduxToolkit/timerSlice";
import { selectSession, minutes } from "../../../reduxToolkit/sessionSlice";

interface TimerSelectProp {
  timers: {
    timersList: TimerProps[],
    selected: TimerProps,
  };
};

const TimerSelect = ({ timers }: TimerSelectProp) => {
  const dispatch = useAppDispatch();

  const toggleSession = (item: TimerProps) => {
    dispatch(selectTimer(item));
    dispatch(selectSession(item.data.focus));
    // dispatch(minutes(item.data.focus));
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={timers.timersList}
        renderItem={({ item }) => (
          <TimerIcon
            selected={timers.selected.idx === item.idx}
            {...{ item, toggleSession }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        extraData={timers.selected}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 6,
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: "12%",
  },
});

export default TimerSelect;
