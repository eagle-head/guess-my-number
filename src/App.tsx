import React, { FC, type PropsWithChildren } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import StartGame from "./screens/StartGame";

const App: FC<PropsWithChildren> = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGame />
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});

export default App;
