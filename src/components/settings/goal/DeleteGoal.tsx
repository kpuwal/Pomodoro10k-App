"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../reduxToolkit/store";
import { CardProps } from "../../../reduxToolkit/models";

import { deleteCard } from "../../../reduxToolkit/slices/cardSlice";
import { pickColor } from "../../../reduxToolkit/slices/colorSlice";

import GoalsListItem from "./GoalListItem";

const DeleteGoal = () => {
  const cardsList = useSelector((state: RootState) => state.card.cardsList);
  const list = cardsList.slice(1);
  const dispatch = useDispatch();

  const handleDelete =(item: CardProps) => {
    dispatch(deleteCard(item));
    dispatch(pickColor(item.theme.idx));
  }

  return (
    <View style={styles.container}>
      <FlatList<CardProps>
        data={list}
        renderItem={({ item }) => (
          <GoalsListItem
            onPress={() => handleDelete(item)}
            textBody={item.goal}
            color={item.theme.main}
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
