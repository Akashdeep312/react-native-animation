import React from "react";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.9, 1.25, 0.9],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: Extrapolate.CLAMP,
  });
  const backgroundColor = interpolateColor(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: ["#0C0D34", "#2CB9B0", "#0C0D34"],
  });
  return (
    <Animated.View
      style={{
        opacity,
        margin: 4,
        backgroundColor,
        height: 8,
        width: 8,
        borderRadius: 4,
        transform: [{ scale }],
      }}
    />
  );
};
export default Dot;
