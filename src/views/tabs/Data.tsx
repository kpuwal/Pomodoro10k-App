"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import SettingsButton from "../../components/modules/settings/Button";
import { clearStorage } from "../../storage/storage";
import { clearTimers, clearCards } from "../../redux/actions";

const DataManager = () => {
  const dispatch = useDispatch();
  const handleErase = () => {
    clearStorage();
    dispatch(clearTimers());
    dispatch(clearCards());
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
