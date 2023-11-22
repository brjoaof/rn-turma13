import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator>
      <Screen name="Inicio" component={Home} options={{ headerShown: false }} />
      <Screen name="Perfil" component={Perfil} />
    </Navigator>
  );
};

export default Stack;
