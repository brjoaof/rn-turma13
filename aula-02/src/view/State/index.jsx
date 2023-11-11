import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

const State = () => {
  //   let contador = 0;
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  // let nome = "João";

  const incrementar = () => {
    // contador = contador + 1
    // contador += 1
    // contador++;
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
    console.log("Contador: ", contador);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 200 }}>{contador}</Text>
      <Button title="Incrementar + 3" onPress={incrementar} color="green" />
      <Text>{nome}</Text>
      <TextInput
        style={{ backgroundColor: "white" }}
        placeholder="Digite Aqui"
        value={nome}
        onChangeText={setNome}
      />
    </View>
  );
};

export default State;
