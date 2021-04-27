"use strict";
import React from "react";
import { View, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../../../svg/Icon";
import ListLabel from "./ListLabel";

interface ListItemProps {
  focus: number;
  relax: number;
  onPress: () => void;
};

const ListItem = ({ focus, relax, onPress }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Icon color="#29304D" bgcolor="#f7f7f9" fTime={focus} rTime={relax} />
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
    backgroundColor: "#F5F7FA",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        // shadowRadius: 5,
        shadowOffset: {
          width: 1,
          height: 2
        }
      },
      android: {
        elevation: 5
      },
    }),
  },
});

export default ListItem;
