"use strict";
import React from "react";
import { Dimensions, View, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

import Card from "../components/modules/statistics/Card";

const { width, height } = Dimensions.get("window");
const cardW = width * 0.8;
const cardH = cardW * 1.8;

const Statistics = () => {
  const cards = useSelector((state) => state.stats.cards);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
        {cards.map((item, idx: number) => {
          const inputRange = [
            (idx - 1) * width,
            idx * width,
            (idx + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.View
              key={idx}
              style={[
                styles.background,
                // { backgroundColor: item.color, opacity },
              ]}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={cards}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Card
              weekdaysTotals={item.weekdaysTotals}
              title={item.goal}
              color={item.color}
              total={item.total}
              speed={item.speed}
              timeLeft={item.timeLeft}
              date={item.date}
              width={cardW}
              height={cardH}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F4",
  },
  card: {
    width,
    alignItems: "center",
    paddingTop: width / 10,
  },
  background: {
    width,
    height: height,
    marginTop: height / 3.1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Statistics;
