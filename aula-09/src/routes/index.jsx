import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack";
import Tabs from "./tabs";
import Drawer from "./drawer";

const Rotas = () => {
  return (
    <NavigationContainer>
      {/* Verificação do usuário 
        Mostrar tela de login 
        ou 
        Mostrar Rotas Privadas
      */}
      <Drawer />
    </NavigationContainer>
  );
};

export default Rotas;
