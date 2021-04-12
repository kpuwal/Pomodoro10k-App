"use strict";
import React from "react";
import { View } from "react-native";

import { goBack } from "../../config/iconsFile";

const GoBackIcon: React.FC = () => {
  return <View style={{ paddingLeft: "10%" }}>{goBack}</View>;
};

export default GoBackIcon;
