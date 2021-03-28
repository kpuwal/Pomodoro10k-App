"use strict";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../../../svg/Icon";
import ListLabel from "./ListLabel";

const ListItem = ({ focus, relax, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon color="#29304D" bgcolor="#EFF0F4" fTime={focus} rTime={relax} />
      <ListLabel {...{ focus, relax }} />
      <TouchableOpacity {...{ onPress }}>
        <MaterialCommunityIcons
          name="delete-forever"
          size={24}
          color="#F76B6B"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 4,
    width: "90%",
    height: 70,
    borderRadius: 20,
    backgroundColor: "#f7f7f9",
  },
});

export default ListItem;
