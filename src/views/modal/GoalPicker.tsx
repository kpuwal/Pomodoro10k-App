import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootState, useAppDispatch } from "../../reduxToolkit/store";

import { selectCard } from "../../reduxToolkit/cardSlice";
import GoalsListItem from "../../components/settings/goal/GoalListItem";
import { CardProps } from "../../reduxToolkit/models";

const GoalPicker: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cardsList = useSelector((state: RootState) => state.card.cardsList);
  const selected = useSelector((state: RootState) => state.card.selected);
  const dispatch = useAppDispatch();

  const activateModal = (value: boolean) => {
    setIsVisible(value);
  };

  const handleSelect = (item: CardProps) => {
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
