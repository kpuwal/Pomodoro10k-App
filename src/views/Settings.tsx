"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Goals from "./tabs/Goals";
import Timers from "./tabs/Timers";
import Data from "./tabs/Data";

const Tab = createMaterialTopTabNavigator();

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#29304D",
          inactiveTintColor: "#8D91A1",
          labelStyle: {
            fontSize: 12,
            paddingTop: "10%",
          },
          indicatorStyle: {
            backgroundColor: "#29304D",
          },
          style: {
            paddingTop: 0,
            backgroundColor: "#EFF0F4",
            border: 0,
          },
        }}
      >
        <Tab.Screen name="TIMERS" component={Timers} />
        <Tab.Screen name="GOALS" component={Goals} />
        <Tab.Screen name="DATA" component={Data} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F4",
    justifyContent: "flex-end",
  },
});

export default Settings;
