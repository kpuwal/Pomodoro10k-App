"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reduxToolkit/store";
import { CardProps } from "../../../reduxToolkit/models";

import { deleteCard } from "../../../reduxToolkit/slices/cardSlice";
import GoalsListItem from "./GoalListItem";

const DeleteGoal = () => {
  const cardsList = useSelector((state: RootState) => state.card.cardsList);
  const list = cardsList.slice(1);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList<CardProps>
        data={list}
        renderItem={({ item }) => (
          <GoalsListItem
            onPress={() => dispatch(deleteCard(item))}
            textBody={item.goal}
            color={item.color}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2 / 3,
    marginTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
});

export default DeleteGoal;
