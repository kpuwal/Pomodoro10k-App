"use strict";
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import SmallButton from "./SmallButton";

interface InputControllerProps {
  type: number;
  dispatchType: (num: number) => void;
}

const InputController = ({ type, dispatchType }: InputControllerProps) => {
  const handleCount = (num1: number, num2: number) => {
    dispatchType(num1 + num2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnGroup}>
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
      </View>
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
      <View style={styles.btnGroup}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E6E9ED",
    // marginHorizontal: 5,
    marginVertical: "2%",
    padding: ".5%",
    borderRadius: 5,
  },
  input: {
    width: "40%",
    fontSize: 18,
    // backgroundColor: "white"
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "center",
  }
});

export default InputController;
