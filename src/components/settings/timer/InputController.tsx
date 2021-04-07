"use strict";
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import SmallButton from "./SmallButton";

interface InputControllerProps {
  type: number;
  dispatchType: (num: number) => void;
};

const InputController = ({ type, dispatchType }: InputControllerProps) => {
  const handleCount = (num1: number, num2: number) => {
    dispatchType(num1 + num2);
  };

  return (
    <View style={styles.container}>
      <SmallButton
        title="-5"
        onPress={() => handleCount(-5, type)}
        disabled={type <= 5 ? true : false}
      />
      <SmallButton
        title="-"
        onPress={() => handleCount(-1, type)}
        disabled={type <= 0 ? true : false}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        clearTextOnFocus={true}
        maxLength={3}
        textAlign="center"
        defaultValue="0"
        value={type.toString()}
        onChangeText={(text) => dispatchType(parseInt(text, 10) || 0)}
      />
      <SmallButton
        title="+"
        onPress={() => handleCount(1, type)}
        disabled={false}
      />
      <SmallButton
        title="+5"
        onPress={() => handleCount(5, type)}
        disabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 5,
    // marginVertical: 20,
  },
  input: {
    width: 120,
  },
});

export default InputController;
