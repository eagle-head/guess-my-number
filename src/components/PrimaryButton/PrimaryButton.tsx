import React, { FC, type PropsWithChildren } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton: FC<PropsWithChildren> = ({ children }) => {
  let num: number = 0;
  const pressHandle = () => {
    console.log("Pressed!", ++num);
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        onPress={pressHandle}
        android_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export { PrimaryButton };

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
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
