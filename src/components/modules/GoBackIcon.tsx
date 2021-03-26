"use strict";
import React from "react";
import { View } from "react-native";

import { goBack } from "../../config/iconsFile";

// TO FIX type of GoBackIcon because it's not React Component somehow 
const GoBackIcon = () => {
  return <View style={{ paddingLeft: "10%" }}>{goBack}</View>;
};

export default GoBackIcon;
