"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppDispatch } from "../../reduxToolkit/store";

import SettingsButton from "../../components/settings/Button";
import { clearTimersAS } from "../../reduxToolkit/timerSlice";
import { clearCardsAS } from "../../reduxToolkit/cardSlice";

const DataManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleErase = () => {
    dispatch(clearTimersAS());
    dispatch(clearCardsAS());
  };
  return (
    <View style={styles.container}>
      <SettingsButton
        title="Erase Data"
        onPress={() => handleErase()}
        disabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DataManager;
