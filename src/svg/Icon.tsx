"use strict";
import React from "react";
import { Dimensions } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const { width } = Dimensions.get("window");
const iconSize = 0.07;

export const getCoordinates = (time, r, vo) => {
  const radians = percentage(time);
  const x = vo + r * Math.cos(2 * Math.PI * radians - Math.PI / 2);
  const y = vo + r * Math.sin(2 * Math.PI * radians - Math.PI / 2);
  return [x, y];
};

const percentage = (time) => time * (0.1 / 6);


const Icon = ({ fTime, rTime, color, bgcolor }) => {
  const size = Math.floor(width) * iconSize;
  const radius = size / 2;
  const [fEndX, fEndY] = getCoordinates(fTime, radius, size);
  const path = [`M${size}`, `${size}`, `${fEndX}`, `${fEndY}`].join(" ");
  const [rEndX, rEndY] = getCoordinates(rTime, radius + 5, size);

  return (
    <Svg width={size * 2} height={size * 2}>
      <Circle cx={size} cy={size} r={radius} fill={color} />

      <Path d={path} stroke={bgcolor} strokeWidth={radius / 5} />

      <Circle cx={size} cy={size} r={radius / 4} fill={bgcolor} />
      {rTime ? (
        <Circle cx={rEndX} cy={rEndY} r={radius / 5} fill={color} />
      ) : (
        <Circle cx={rEndX} cy={rEndY} r="0" />
      )}
    </Svg>
  );
};

export default Icon;
