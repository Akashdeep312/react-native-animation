import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function App() {
  const width = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    width: width.value,
    height: 100,
    backgroundColor: "blue"
  }));
  useEffect(() => {
    width.value = withTiming(300, { duration: 5000 });
  }, [width]);
  return (
    <View style={styles.container}>
      <Animated.View style={style} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
