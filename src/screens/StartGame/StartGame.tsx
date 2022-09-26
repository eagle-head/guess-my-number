import React, { FC, type PropsWithChildren } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import PrimaryButton from "../../components/PrimaryButton";

const StartGame: FC<PropsWithChildren> = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputNumber}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export { StartGame };

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
