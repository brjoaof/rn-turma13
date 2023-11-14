import { View, StyleSheet } from "react-native";
import React from "react";

const Exercicio5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view} />
      <View style={[styles.view, styles.bgcolor2]} />
      <View style={[styles.view, styles.bgcolor3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  view: {
    width: 130,
    height: 130,
    backgroundColor: "aqua",
  },
  bgcolor2: {
    backgroundColor: "green",
  },
  bgcolor3: {
    backgroundColor: "brown",
  },
});

export default Exercicio5;
