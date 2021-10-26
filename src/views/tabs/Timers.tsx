"use strict";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import AddTimer from "../../components/settings/timer/AddTimer";
import DeleteTimer from "../../components/settings/timer/DeleteTimer";


const Timers: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={styles.container}
      keyboardVerticalOffset={60}
    >
      <DeleteTimer />
      <AddTimer />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Timers;
