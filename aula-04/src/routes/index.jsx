import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Perfil from "../screens/perfil";

const { Navigator, Screen } = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            title: "Página Inicial",
            headerTintColor: "white",
            headerTitleAlign: "left",
            headerShown: false,
            headerStyle: {
              backgroundColor: "#121214",
            },
          }}
        />
        <Screen name="Perfil" component={Perfil} />
      </Navigator>
    </NavigationContainer>
  );
};
