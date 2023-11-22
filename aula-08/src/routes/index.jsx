import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Home from "../screens/home";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();
// const { Navigator, Screen } = createNativeStackNavigator()

const Rotas = () => {
  const { user, verificaNivelAcesso } = useContext(AuthContext);
  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            {verificaNivelAcesso("admin") && (
              <Stack.Screen name="Admin" component={Home} />
            )}
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
