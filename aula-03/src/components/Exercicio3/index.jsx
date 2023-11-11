import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio3 = () => {
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
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  view: {
    width: 160,
    height: 160,
    backgroundColor: "aqua",
  },
  bgcolor2: {
    backgroundColor: "green",
  },
  bgcolor3: {
    backgroundColor: "brown",
  },
});

export default Exercicio3;
