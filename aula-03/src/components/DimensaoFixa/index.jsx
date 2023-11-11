import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DimensaoFixa = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: "lightgray" }}>
      <View
        style={{ width: 100, height: 100, backgroundColor: "powderblue" }}
      />
      <View
        style={{
          alignSelf: "flex-end",
          width: 150,
          height: 150,
          backgroundColor: "skyblue",
        }}
      />
      <View style={{ width: 200, height: 200, backgroundColor: "steelblue" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default DimensaoFixa;
