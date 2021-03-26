"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { selectTimer, selectSession, setMin } from "../../redux/actions";
import TimerIcon from "../modules/home/TimerIcon";

const TimerSelect = () => {
  const timers = useSelector((state) => state.timers);
  const dispatch = useDispatch();

  const toggleSession = (item) => {
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
