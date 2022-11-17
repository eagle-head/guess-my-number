import React, { FC, useState, type PropsWithChildren } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Colors from "./constants/colors";
import GameScreen from "./screens/Game";
import GameOver from "./screens/GameOver";
import { StartGame } from "./screens/StartGame/StartGame";

const App: FC<PropsWithChildren> = () => {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds: number): void => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = (): void => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          accessibilityRole="image"
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
