"use strict";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

const SettingsInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      clearTextOnFocus={true}
      maxLength={3}
      textAlign="center"
      defaultValue="0"
      {...{ value, onChangeText }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
  },
});

export default SettingsInput;
