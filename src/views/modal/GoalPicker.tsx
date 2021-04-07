import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { selectCard } from "../../redux/actions";
import GoalsListItem from "../../components/settings/goal/GoalListItem";

const GoalPicker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardsList = useSelector((state) => state.stats.cards);
  const selected = useSelector((state) => state.stats.selected);
  const dispatch = useDispatch();

  console.log("loading GoalPicker")

  const activateModal = (val) => {
    setIsVisible(val);
  };

  const handleSelect = (item) => {
    dispatch(selectCard(item));
    setIsVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={() => activateModal(true)}>
        <View style={styles.goalPicker}>
          <Text style={styles.title}>goal:</Text>
          <Text style={styles.text}>{selected.goal}</Text>
          <MaterialCommunityIcons
            name="playlist-plus"
            size={24}
            color="white"
          />
        </View>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <FlatList
              data={cardsList}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <GoalsListItem textBody={item.goal} color={item.color} />
                </TouchableOpacity>
              )}
              keyExtractor={(_, idx) => idx.toString()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginTop: 100,
  },
  modalView: {
    paddingTop: 22,
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  goalPicker: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 10,
  },
  title: {
    color: "#8D91A1",
  },
});

export default GoalPicker;
