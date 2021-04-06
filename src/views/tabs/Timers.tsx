"use strict";
import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/modules/settings/Button";
import AddTimer from "../../components/settings/AddTimer";
import DeleteTimer from "../../components/settings/DeleteTimer";

const Timers: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DeleteTimer />
      <AddTimer />
      <View style={styles.button}>
        <Button
          title="Done"
          onPress={() => navigation.navigate("Home")}
          disabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: "yellow",
  },
  button: {
    flex: 1 / 6,
    justifyContent: "flex-start"
  }
});

export default Timers;
