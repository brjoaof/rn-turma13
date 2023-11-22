import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Button
        title="Ir Para Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
};

export default Home;
