"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import StyleGuide from "../config/StyleGuide";

import Timer from "../components/home/Timer";
import BottomNavigation from "../components/home/BottomNavigation";

const Home: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Timer />
      <BottomNavigation
        statsPress={() => navigation.navigate("Statistics")}
        settingsPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: StyleGuide.palette.main.primary,
  },
});

export default Home;
