"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";

import SettingsInput from "../modules/settings/Input";
import SmallButton from "../modules/settings/SmallButton";

const InputController = ({ type, dispatchType }) => {
  const handleCount = (num: number) => {
    dispatchType(type + num);
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
      <SettingsInput
        value={type.toString()}
        onChangeText={(text) => dispatchType(parseInt(text, 10) || "0")}
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
    marginHorizontal: 5,
    marginVertical: 20,
  },
});

export default InputController;
