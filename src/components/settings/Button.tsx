"use strict";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyleGuide from "../../config/StyleGuide";

interface ButtonProps {
  onPress: () => void;
  disabled: boolean;
  title: string,
}

const Button = ({ onPress, disabled, title }: ButtonProps) => {
  return (
    <TouchableOpacity {...{ onPress, disabled }}>
      <View style={[
        styles.container,
        {backgroundColor: 
          disabled 
            ? StyleGuide.disabled
            : StyleGuide.themeA.main
          }
      ]}>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: StyleGuide.themeA.main,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
  }
});

export default Button;
