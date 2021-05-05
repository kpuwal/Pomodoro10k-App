"use strict";
import React from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

import AddGoal from "../../components/settings/goal/AddGoal";
import DeleteGoal from "../../components/settings/goal/DeleteGoal";

const GoalsManager = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={styles.container}
      keyboardVerticalOffset={60}
    >
      <DeleteGoal />
      <AddGoal />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoalsManager;
