import React, { FC, type PropsWithChildren } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

export const NumberContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: "bold",
  },
});
