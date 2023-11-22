import { View, Text } from "react-native";
import React, { useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MeuContexto } from "../../context/Contexto";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "react-native-paper";

const Home = () => {
  const { nome } = useContext(MeuContexto);
  const { logout } = useContext(AuthContext);

  const obterInfos = async () => {
    const email = await AsyncStorage.getItem("email");
    const dados = JSON.parse(email);
    console.log(dados.email);
  };

  useEffect(() => {
    obterInfos();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Olá {nome} !</Text>
      <Button onPress={logout} mode="contained">
        Deslogar
      </Button>
    </View>
  );
};

export default Home;
