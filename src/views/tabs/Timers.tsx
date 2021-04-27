"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";

import AddTimer from "../../components/settings/timer/AddTimer";
import DeleteTimer from "../../components/settings/timer/DeleteTimer";

const Timers: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DeleteTimer />
      <AddTimer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
  },
});

export default Timers;
