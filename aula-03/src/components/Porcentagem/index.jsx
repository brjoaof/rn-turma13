import React from "react";
import { View, StyleSheet } from "react-native";

const Porcentagem = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: "20%", backgroundColor: "powderblue" }} />
      <View
        style={{ width: "33%", height: "35%", backgroundColor: "skyblue" }}
      />
      <View
        style={{ width: "66%", height: 200, backgroundColor: "steelblue" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "lightgray",
  },
});

export default Porcentagem;
