import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ColorBox from "./ColorBox";
import { CardProps } from "../../reduxToolkit/models";

interface HistoryProps {
  cards: CardProps[],
}

const History = ({ cards }: HistoryProps) => {
  const dates = cards.map(item => {
    return item.dates.map((date) => {
      return {
        date: new Date(date).toLocaleDateString(),
        color: item.color,
        idx: new Date(date).toLocaleTimeString()
      }
    })
  });
 
  const flattened = dates.reduce((flat, val) => flat.concat(val), []);
  flattened.sort((a, b) => a.idx.localeCompare(b.idx));
  const uniqueDates = [...new Set(flattened.map((a) => a.date))];

  const neew = uniqueDates.map((date) => {
    const dset = flattened
      .filter((item) => item.date.match(date))
      .map((x) => x.color);
    return {date, colors: dset.reverse()};
  })
  
  neew.sort((a, b) => a.date.localeCompare(b.date));
  
  return (
    <View style={styles.container}>
      <FlatList
        data={neew}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ColorBox colors={item.colors} />
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#EFF0F4",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: "5%",
    padding: "2.5%",
  }
});

export default History;
