import React, { FC, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";

import GuessLogItem from "../../components/game/GuessLogItem";
import NumberContainer from "../../components/game/NumberContainer";
import Card from "../../components/ui/Card";
import InstructionText from "../../components/ui/IntructionText";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Title from "../../components/ui/Title";

type TGenerateRandom = (min: number, max: number, exclude: number) => number;

enum Direction {
  LOWER = "LOWER",
  GREATER = "GREATER",
}

interface IGameScreen {
  userNumber: number;
  onGameOver: (arg: number) => void;
}

let minBoundary = 1;
let maxBoudary = 100;

const generateRandomBetween: TGenerateRandom = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export const GameScreen: FC<PropsWithChildren<IGameScreen>> = ({ userNumber, onGameOver }) => {
  const initialGuess: number = useMemo(() => generateRandomBetween(minBoundary, maxBoudary, userNumber), [userNumber]);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, onGameOver, userNumber, guessRounds]);

  useEffect(() => {
    minBoundary = 1;
    maxBoudary = 100;
  }, []);

  const nextGuessHandler = (direction: Direction): void => {
    if (
      (direction === Direction.LOWER && currentGuess < userNumber) ||
      (direction === Direction.GREATER && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === Direction.LOWER) {
      maxBoudary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(minBoundary, maxBoudary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher of lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, Direction.LOWER)}>-</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, Direction.GREATER)}>+</PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={guessRounds}
          renderItem={itemData => (
            <GuessLogItem roundNumber={guessRounds.length - itemData.index} guess={itemData.item} />
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
