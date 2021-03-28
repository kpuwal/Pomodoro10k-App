"use strict";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../modules/settings/Button";
import InputController from "../settings/InputController";
import { createTimer } from "../../redux/actions";

const AddTimer: React.FC = () => {
  const [focus, setFocus] = useState(0);
  const [relax, setRelax] = useState(0);
  const dispatch = useDispatch();

  const handleCreateTimer = () => {
    dispatch(createTimer(focus, relax));
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
    flex: 2 / 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddTimer;
