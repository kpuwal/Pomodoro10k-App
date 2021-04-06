"use strict";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { deleteTimer } from "../../redux/actions";
import ListItem from "../modules/settings/ListItem";

const DeleteTimer = () => {
  const timersList = useSelector((state) => state.timers.timersList);
  const displayList = timersList.slice(2);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={displayList}
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
    flex: 3 / 6,
    marginTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },
});

export default DeleteTimer;
