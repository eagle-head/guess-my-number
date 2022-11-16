import React, { FC, type PropsWithChildren } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../../constants/colors";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export { Card };

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
