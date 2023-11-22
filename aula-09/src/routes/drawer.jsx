import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "../screens/Perfil";
import { Feather } from "@expo/vector-icons";
import Tabs from "./tabs";

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => {
  return (
    <Navigator>
      <Screen
        name="Inicio"
        component={Tabs}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Drawer;
