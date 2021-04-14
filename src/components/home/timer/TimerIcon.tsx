"use strict";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import StyleGuide from "../../../config/StyleGuide";
import Icon from "../../../svg/Icon";
import { TimerProps } from "../../../reduxToolkit/models"; 
import { RootState } from "../../../reduxToolkit/store";

interface TimerIconProps {
  item: TimerProps;
  selected: boolean;
  toggleSession: (item: TimerProps) => void;
};

const TimerIcon = ({ item, selected, toggleSession }: TimerIconProps) => {
  const start = useSelector((state: RootState) => state.counter.start);
  const tSelected = StyleGuide.palette.main.secondary;
  const tUnselected = StyleGuide.palette.main.tertiary;

  return (
    <TouchableOpacity disabled={start} onPress={() => toggleSession(item)}>
      <View style={styles.container}>
        <Icon
          color={selected ? tSelected : tUnselected}
          bgcolor={StyleGuide.palette.main.primary}
          fTime={item.data.focus}
          rTime={item.data.relax}
        />
        <Text style={{ color: selected ? tSelected : tUnselected }}>
          {item.data.focus}|{item.data.relax}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default TimerIcon;
