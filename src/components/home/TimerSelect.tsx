"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { selectTimer, selectSession, setMin } from "../../redux/actions";
import TimerIcon from "../modules/home/TimerIcon";
import { TimerState, TimerProps } from "../../redux/reducers/timers";

interface TimerSelectProp {
  timers: TimerState;
};

const TimerSelect = ({ timers }: TimerSelectProp) => {
  const dispatch = useDispatch();

  const toggleSession = (item: TimerProps) => {
    dispatch(selectTimer(item));
    dispatch(selectSession(item.data.focus));
    dispatch(setMin(item.data.focus));
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
