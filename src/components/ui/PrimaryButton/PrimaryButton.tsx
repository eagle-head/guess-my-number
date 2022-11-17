import React, { FC, type PropsWithChildren } from "react";
import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";

import Colors from "../../../constants/colors";

interface IPrimaryButton {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const PrimaryButton: FC<PropsWithChildren<IPrimaryButton>> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        accessibilityRole="button"
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
