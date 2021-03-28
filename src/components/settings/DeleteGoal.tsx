"use strict";
import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { deleteCard } from "../../redux/actions";
import GoalsListItem from "../modules/settings/GoalListItem";

const DeleteGoal = () => {
  const cardsList = useSelector((state) => state.stats.cards);
  const dispatch = useDispatch();

  const handleDelete = (idx) => {
    dispatch(deleteCard(idx));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cardsList.slice(1)}
        renderItem={({ item }) => (
          <View style={styles.listRow}>
            <GoalsListItem textBody={item.goal} color={item.color} />
            <TouchableOpacity onPress={() => handleDelete(item.idx)}>
              <MaterialCommunityIcons name="delete" size={24} color="#F76B6B" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, idx) => idx.toString()}
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
