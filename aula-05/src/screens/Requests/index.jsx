import { View, Text, Button } from "react-native";
import React from "react";

const Requests = () => {
  const getGatinho = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const dados = await response.json();
    console.log(dados);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View>
        <Text>Requests</Text>
      </View>
      <Button title="Fazer um GET" onPress={getGatinho} />
    </View>
  );
};

export default Requests;
