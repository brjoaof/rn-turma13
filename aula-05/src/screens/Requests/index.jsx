import { View, Text, Button, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import api from "../../services/api";

const Requests = () => {
  const [gatinho, setGatinho] = useState();
  const [carregando, setCarregando] = useState(true);

  const getGatinho = async () => {
    try {
      setCarregando(true);
      // const response = await fetch(
      //   "https://api.thecatapi.com/v1/images/search"
      // );
      // const dados = await response.json();
      // setGatinho(dados[0]);

      const { data } = await api.get("/images/search");
      setGatinho(data[0]);
    } catch (e) {
      console.log(e);
    }

    // fetch("https://api.thecatapi.com/v1/images/search")
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));
  };

  useEffect(() => {
    getGatinho();
  }, []);

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

      {/* {carregando && <ActivityIndicator size="large" color="blue" />} */}
      {carregando && <ActivityIndicator size="large" color="blue" />}

      <Image
        // height={gatinho != undefined ? gatinho.height : null}
        height={500}
        width={400}
        source={{
          uri: gatinho?.url,
        }}
        onLoadEnd={() => setCarregando(false)}
      />
      <Button title="Fazer um GET" onPress={getGatinho} disabled={carregando} />
    </View>
  );
};

export default Requests;
