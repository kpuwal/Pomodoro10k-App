"use strict";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { statsIcon, settingsIcon } from "../config/iconsFile";
import { StyleGuide } from "../config/StyleGuide";

import Timer from "../components/home/Timer";
import GoalPicker from "./modal/GoalPicker";

const Home: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <GoalPicker />
      <Timer />
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Statistics")}>
          {statsIcon(StyleGuide.themeA.tertiary)}
          <Text style={styles.txt}>STATS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
          {settingsIcon(StyleGuide.themeA.tertiary)}
          <Text style={styles.txt}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: StyleGuide.themeA.main,
  },
  navContainer: {
    flex: 1 / 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "20%",
  },
  button: {
    alignItems: "center",
  },
  txt: {
    color: StyleGuide.themeA.tertiary,
    fontSize: 10,
    paddingTop: 4,
  },
});

export default Home;
