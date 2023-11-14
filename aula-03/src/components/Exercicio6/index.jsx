import { View, StyleSheet } from "react-native";
import React from "react";

const Exercicio6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.view, styles.green]} />
        <View style={[styles.view, styles.green]} />
        <View style={[styles.view, styles.green]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.view, styles.blue]} />
        <View style={[styles.view, styles.blue]} />
        <View style={[styles.view, styles.blue]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.view, styles.purple]} />
        <View style={[styles.view, styles.purple]} />
        <View style={[styles.view, styles.purple]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.view, styles.orange]} />
        <View style={[styles.view, styles.orange]} />
        <View style={[styles.view, styles.orange]} />
      </View>
    </View>
  );
};

export default Exercicio6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "lightgray",
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  view: {
    width: 110,
    height: 110,
    backgroundColor: "gray",
  },

  green: {
    backgroundColor: "green",
  },
  blue: {
    backgroundColor: "blue",
  },
  purple: {
    backgroundColor: "purple",
  },
  orange: {
    backgroundColor: "orange",
  },
});
