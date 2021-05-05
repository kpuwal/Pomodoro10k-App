"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../reduxToolkit/store";

import { deleteTimer } from "../../../reduxToolkit/slices/timerSlice";
import ListItem from "./ListItem";

const DeleteTimer = () => {
  const timersList = useSelector((state: RootState) => state.timer.timersList);
  const displayList = timersList.slice(2);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={displayList}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => dispatch(deleteTimer(item))}
            focus={item.focus.min}
            relax={item.relax.min}
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

export default DeleteTimer;
