"use strict";
import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootState } from "../../../reduxToolkit/store";
import { CardProps } from "../../../redux/models/Card";

import { deleteCard } from "../../../reduxToolkit/cardSlice";
import GoalsListItem from "./GoalListItem";

const DeleteGoal = () => {
  const cardsList = useSelector((state: RootState) => state.card.cardsList);
  const list = cardsList.slice(1);
  const dispatch = useDispatch();

  const handleDelete = (item: CardProps) => {
    dispatch(deleteCard(item));
  };

  return (
    <View style={styles.container}>
      <FlatList<CardProps>
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
