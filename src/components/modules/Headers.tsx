"use strict";
import React from "react";
import { View, Text } from "react-native";

import { statsIcon, settingsIcon } from "../../config/iconsFile";

export const statisticsHeader: React.FC = () => {
  return header("STATISTICS", statsIcon("#29304D"), true);
};

export const settingsHeader: React.FC = () => {
  return header("SETTINGS", settingsIcon("#29304D"), false);
};

function header(title: string, icon: object, isBottom: boolean) {
  const align = isBottom ? "flex-end" : "center";
  return (
    <View style={{ flexDirection: "row", alignItems: align }}>
      {icon}
      <Text
        style={{
          color: "#29304D",
          paddingLeft: 10,
          fontSize: 13,
          fontWeight: "bold",
          fontFamily: "Roboto-Regular",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
