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
}

const TimerIcon = ({ item, selected, toggleSession }: TimerIconProps) => {
  const start = useSelector((state: RootState) => state.counter.start);
  const tSelected = StyleGuide.themeA.secondary;
  const tUnselected = StyleGuide.unselected;

  return (
    <TouchableOpacity disabled={start} onPress={() => toggleSession(item)}>
      <View style={styles.container}>
        <Icon
          color={selected ? tSelected : tUnselected}
          bgcolor={StyleGuide.themeA.main}
          fTime={item.focus.min}
          rTime={item.relax.min}
        />
        <Text style={{ color: selected ? tSelected : tUnselected }}>
          {item.focus.min}|{item.relax.min}
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
