"use strict";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { statsIcon, settingsIcon } from "../../config/iconsFile";
import StyleGuide from "../../config/StyleGuide";

const BottomNavigation = ({ statsPress, settingsPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={statsPress}>
        {statsIcon(StyleGuide.palette.main.tertiary)}
        <Text style={styles.txt}>STATS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={settingsPress}>
        {settingsIcon(StyleGuide.palette.main.tertiary)}
        <Text style={styles.txt}>SETTINGS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "20%",
  },
  button: {
    alignItems: "center",
  },
  txt: {
    color: StyleGuide.palette.main.tertiary,
    fontSize: 10,
    paddingTop: 4,
  },
});

export default BottomNavigation;
