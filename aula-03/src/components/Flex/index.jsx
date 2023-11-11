import { View, StyleSheet } from "react-native";
import React from "react";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingTop: 20,
  },
  view1: {
    flex: 1,
    backgroundColor: "red",
  },
  view2: {
    flex: 10,
    backgroundColor: "brown",
  },
  view3: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default Flex;
