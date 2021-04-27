"use strict";
import React, { useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { useAppDispatch } from "../../../reduxToolkit/store";

import Button from "../Button";
import InputController from "./InputController";
import { createTimer } from "../../../reduxToolkit/slices/timerSlice";

const AddTimer: React.FC = () => {
  const [focus, setFocus] = useState<number>(0);
  const [relax, setRelax] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleCreateTimer = () => {
    dispatch(createTimer({focus, relax}));
    setFocus(0);
    setRelax(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Text style={styles.title}>focus:</Text>
        <InputController type={focus} dispatchType={setFocus} />
        <Text style={styles.title}>relax:</Text>
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
    flex: 1 / 2,
    // backgroundColor: "#F5F7FA",
    justifyContent: "space-around",
    paddingBottom: "10%",
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOpacity: 0.2,
    //     // shadowRadius: 5,
    //     shadowOffset: {
    //       width: 2,
    //       height: 3
    //     }
    //   },
    //   android: {
    //     elevation: 5
    //   },
    // }),
  },
  inputs: {
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-start",
    paddingLeft: "5%",
    color: "#8D91A1",
  },
});

export default AddTimer;
