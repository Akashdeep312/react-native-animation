import React, { ReactNode } from "react";
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import theme, { Box } from "./Theme";
export const assets = [require("../../assets/pattern1.png")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  // const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <Box flex={1} backgroundColor="secondry">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={assets[0]}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondry" paddingTop="m">
          {footer}
          <Box height={theme.spacing.m} />
        </Box>
      </Box>
    </SafeAreaProvider>
  );
};
export default Container;
