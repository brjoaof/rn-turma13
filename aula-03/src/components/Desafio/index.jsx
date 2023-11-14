import { View, StyleSheet } from "react-native";
import React from "react";

const Desafio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.sessaoSuperior}>
        <View style={styles.quadrado} />
        <View style={styles.retanguloSuperior} />
      </View>
      <View style={styles.main}>
        <View style={styles.mainLeft} />
        <View style={[styles.mainLeft, styles.mainRight]} />
      </View>
      <View style={styles.feed}>
        {/* container - Igual ao exercicio 6*/}
        <View style={styles.feedRow}>
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>
        {/* container - Igual ao exercicio 6*/}
        <View style={styles.feedRow}>
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default Desafio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#50e3c2",
    height: 20,
  },
  quadrado: {
    backgroundColor: "#efb121",
    height: 110,
    width: 110,
  },
  sessaoSuperior: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  retanguloSuperior: {
    backgroundColor: "#efb121",
    width: "44%",
    height: 35,
  },
  main: {
    backgroundColor: "aqua",
    flex: 0.8,
    flexDirection: "row",
  },
  mainLeft: {
    width: "50%",
    height: "87%",
    backgroundColor: "#A900FD",
  },
  mainRight: {
    backgroundColor: "#5485E1",
  },
  footer: {
    backgroundColor: "#5485E1",
    flex: 0.5,
  },
  feed: {
    flex: 3,
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    // alignContent: "space-around",
  },
  feedRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
