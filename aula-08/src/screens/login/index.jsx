import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";

const Login = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const { signin } = useContext(AuthContext);

  const guardarInfos = async () => {
    if (login == "") return;

    const user = {
      email: login,
      role: "admin",
    };

    try {
      await AsyncStorage.setItem("email", JSON.stringify(user));
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", gap: 10, padding: 30 }}>
      <TextInput
        mode="outlined"
        label="E-mail"
        onChangeText={setLogin}
        value={login}
      />
      <TextInput
        mode="outlined"
        label="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={true}
      />
      <Button
        mode="contained"
        style={{ marginTop: 30 }}
        onPress={() => signin(login, senha)}
      >
        Entrar
      </Button>
    </View>
  );
};

export default Login;
