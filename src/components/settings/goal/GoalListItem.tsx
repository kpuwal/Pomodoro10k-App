"use strict";
import React from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ColorBox } from "./ColorBox";

interface GoalsListItemProps {
  goalHours: number;
  textBody: string;
  color: string;
  onPress?: () => void;
}

interface GoalList {
  color: string;
  textBody: string;
}

export const ListItem = ({ color, textBody }: GoalList) => {
  return (
    <View style={styles.listContainer}>
      <ColorBox {...{ color }} />
      <Text style={styles.txt}>{textBody}</Text>
    </View>
  );
};

export const GoalsListItem = ({ goalHours, textBody, color, onPress }: GoalsListItemProps) => {
  return (
    <View style={styles.container}>
      <ColorBox {...{ color }} />
      <Text>{textBody}</Text>
      <Text>{goalHours} hours</Text>
      <TouchableOpacity {...{ onPress }}>
        <MaterialCommunityIcons
          name="delete-forever"
          size={24}
          color="#F76B6B" />
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
    borderRadius: 10,
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
    })
  },
  listContainer: {
    flexDirection: "row",
    padding: "5%",
  },
  txt: {
    paddingLeft: "10%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#29304D",
  }
});
