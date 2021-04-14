"use strict";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../Button";
import InputController from "./InputController";
import { createTimer } from "../../../reduxToolkit/slices/timerSlice";

const AddTimer: React.FC = () => {
  const [focus, setFocus] = useState<number>(0);
  const [relax, setRelax] = useState<number>(0);
  const dispatch = useDispatch();

  const handleCreateTimer = () => {
    dispatch(createTimer({focus, relax}));
    setFocus(0);
    setRelax(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <InputController type={focus} dispatchType={setFocus} />
        <InputController type={relax} dispatchType={setRelax} />
      </View>
      <Button
        title="Create Timer"
        onPress={() => handleCreateTimer()}
        disabled={
          (focus === 0 && relax === 0) || (focus === 0 && relax !== 0)
            ? true
            : false
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2 / 6,
    // backgroundColor: "pink",
    justifyContent: "space-around"
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddTimer;
