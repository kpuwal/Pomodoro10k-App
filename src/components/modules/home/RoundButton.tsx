"use strict";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface RoundButtonProps {
  size: number;
  type: object;
  onPress: () => void;
  disabled: boolean;
  colorStripe: string;
};

const RoundButton = ({ size, type, onPress, disabled, colorStripe }: RoundButtonProps) => {
  const color = disabled ? "#8D91A1" : "white";
  return (
    <View
      style={{
        backgroundColor: color,
        width: size + size / 10,
        height: size + size / 10,
        borderRadius: size + size / 5,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: size / 25,
              borderColor: "#29304D",
            }}
          />
          <View style={{ position: "absolute" }}>{type}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RoundButton;
