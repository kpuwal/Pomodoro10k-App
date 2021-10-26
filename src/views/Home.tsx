"use strict";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackProps } from "./ViewsStackProps";

import { statsIcon, settingsIcon } from "../config/iconsFile";
import StyleGuide from "../config/StyleGuide";

import Timer from "../components/home/Timer";
import GoalPicker from "./modal/GoalPicker";

type HomeProp = StackNavigationProp<RootStackProps, "Home">

const Home: React.FC = () => {
  const navigation = useNavigation<HomeProp>();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <GoalPicker />
      <Timer />
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Statistics")}
        >
          {statsIcon(StyleGuide.unselected)}
          <Text style={styles.txt}>STATS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          {settingsIcon(StyleGuide.unselected)}
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
    color: StyleGuide.unselected,
    fontSize: 10,
    paddingTop: 4,
  },
});

export default Home;
