import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Tarefas from "../screens/Tarefas";

const Stack = createNativeStackNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
