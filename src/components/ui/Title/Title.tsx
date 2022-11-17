import React, { FC, type PropsWithChildren } from "react";
import { Platform, StyleSheet, Text } from "react-native";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text accessibilityRole="header" style={styles.title}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
