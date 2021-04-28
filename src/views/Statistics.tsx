"use strict";
import React from "react";
import { Dimensions, Platform, View, Text, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { RootState } from "../reduxToolkit/store";

import CardSlide from "../components/statistics/CardSlide";
import History from "../components/statistics/History";

import { CardProps } from "../reduxToolkit/models";

const { width, height } = Dimensions.get("window");
const cardW = width * 0.9;
const cardH = height * 0.7;

const Statistics: React.FC = () => {
  const cards = useSelector((state: RootState) => state.card.cardsList);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
        {cards.map((item: CardProps, idx: number) => {
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
                { backgroundColor: item.theme.main, opacity },
              ]}
            />
          );
        })}
      </View>
      <Animated.FlatList<CardProps>
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
            <CardSlide
              idx={item.idx}
              dates={item.dates}
              weekdaysTotals={item.weekdaysTotals}
              goal={item.goal}
              theme={item.theme}
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
      <View style={styles.historyBox}>
        <View style={[styles.upperBox]}>
          <Text style={styles.title}>History</Text>
        </View>
        <History {...{ cards }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF0F4",
  },
  card: {
    // backgroundColor: "pink",
    width,
    alignItems: "center",
    // paddingTop: width / 10,
  },
  background: {
    flex: 2,
    width,
    height,
    marginTop: "43%",
    borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    ...StyleSheet.absoluteFillObject,
  },
  historyBox: {
    flex: 6,
    // borderTopLeftRadius: 15,
    // backgroundColor: "#EFF0F4",
    // marginLeft: "1%",
    // alignItems: "flex-end",
    flexDirection: "column",
  },
  upperBox: {
    height: 20,
    borderBottomRightRadius: 25,
  },
  downBox: {
    height: 50,
    backgroundColor: "#EFF0F4",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: "5%",
  },
  title: {
    // marginTop: "2%",
    marginBottom: "1%",
    fontFamily: "Roboto-Light",
    marginLeft: "5%",
    color: "#EFF0F4",
    // paddingVertical: 50,
    // alignItems: "flex-start",
  },
});

export default Statistics;
