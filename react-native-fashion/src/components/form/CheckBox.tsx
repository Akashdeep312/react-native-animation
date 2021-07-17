import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../Theme";

interface CheckBoxProps {
  label: string;
}

const CheckBox = ({ label }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          width={20}
          height={20}
          borderRadius="s"
          backgroundColor={checked ? "primary" : "white"}
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          marginRight="s"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};
export default CheckBox;
