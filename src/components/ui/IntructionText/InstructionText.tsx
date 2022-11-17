import React, { FC, type PropsWithChildren } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../../../constants/colors";

interface IText {
  style?: TextStyle;
}

const InstructionText: FC<PropsWithChildren<IText>> = ({ children, style }) => {
  return (
    <Text accessibilityRole="header" style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export { InstructionText };

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
