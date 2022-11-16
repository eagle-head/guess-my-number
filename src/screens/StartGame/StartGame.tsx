import React, { FC, useState, type PropsWithChildren } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

import Colors from "../../constants/colors";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import InstructionText from "../../components/ui/IntructionText";

interface IStartGame {
  onPickNumber: (arg: number) => void;
}

const StartGame: FC<PropsWithChildren<IStartGame>> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInputHandler = (enteredText: string): void => {
    setEnteredNumber(enteredText);
  };

  const resetNumberHandler = (): void => {
    setEnteredNumber("");
  };

  const confirmInputHandler = (): void => {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert("Invalid number!", "Number has to be a number between 1 and 99", [
        { text: "Ok", style: "destructive", onPress: resetNumberHandler },
      ]);
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export { StartGame };

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
