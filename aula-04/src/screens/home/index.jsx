import { View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
};

export default Home;
