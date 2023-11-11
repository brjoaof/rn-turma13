import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const Perfil = ({ nome = "Teste", idade }) => {
  console.log(nome, idade);
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Olá, {nome}!</Text>
      <Text style={styles.nome}>Você tem {idade} anos.</Text>
    </View>
  );
};

export default Perfil;
