"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { deleteTimer } from "../../redux/actions";
import ListItem from "../modules/settings/ListItem";

const DeleteTimer = () => {
  const timersList = useSelector((state) => state.timers.timersList);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={timersList.slice(2)}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => dispatch(deleteTimer(item))}
            focus={item.data.focus}
            relax={item.data.relax}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4 / 8,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});

export default DeleteTimer;
