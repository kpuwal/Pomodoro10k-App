"use strict";
import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { deleteCard } from "../../redux/actions";
import GoalsListItem from "../modules/settings/GoalListItem";
import { loadPartialConfigAsync } from "@babel/core";

const DeleteGoal = () => {
  const cardsList = useSelector((state) => state.stats.cards);
  const list = cardsList.slice(1);
  const dispatch = useDispatch();

  console.log("loading DeleteGoal")
  console.log("cards list ", cardsList)

  const handleDelete = (item: object) => {
    dispatch(deleteCard(item));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.listRow}>
            <GoalsListItem textBody={item.goal} color={item.color} />
            <TouchableOpacity onPress={() => handleDelete(item)}>
              <MaterialCommunityIcons name="delete" size={24} color="#F76B6B" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4 / 7,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DeleteGoal;
