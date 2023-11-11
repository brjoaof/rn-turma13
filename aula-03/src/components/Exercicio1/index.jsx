import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  view: {
    width: "30%",
    height: "100%",
    backgroundColor: "aqua",
  },
});

export default Exercicio1;
