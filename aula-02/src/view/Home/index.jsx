import { ScrollView, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import Perfil from "../Perfil";

const Home = () => {
  return (
    <ScrollView>
      <Text style={styles.texto}>Home</Text>
      <Perfil nome="João Felipe" idade="32" />
      <Perfil />
      <Perfil />
      <Perfil />
    </ScrollView>
  );
};

export default Home;
