"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";

import AddGoal from "../../components/settings/AddGoal";
import DeleteGoal from "../../components/settings/DeleteGoal";

const GoalsManager = () => {
  return (
    <View style={styles.container}>
      <DeleteGoal />
      <AddGoal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoalsManager;
