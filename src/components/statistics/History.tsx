import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CardProps } from "../../reduxToolkit/models";

interface HistoryProps {
  cards: CardProps[],
}

const History = ({ cards }: HistoryProps) => {
  const dates = cards.map(item => {
    console.log(item.dates)
  })
  return (
    <View style={styles.container}>
      <FlatList<CardProps>
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.dates} color:{item.color}</Text>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#EFF0F4",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: "5%",
  }
});

export default History;
