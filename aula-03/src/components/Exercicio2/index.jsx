import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  view: {
    width: "100%",
    height: "17%",
    backgroundColor: "aqua",
  },
});

export default Exercicio2;
