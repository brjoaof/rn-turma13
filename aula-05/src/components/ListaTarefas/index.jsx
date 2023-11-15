import { Text, FlatList } from "react-native";
import React from "react";

const ListaTarefas = ({ listaTarefas }) => {
  return (
    <FlatList
      data={listaTarefas}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Text style={{ color: "#f1f1f1", fontSize: 35 }}>{item}</Text>
      )}
    />
  );
};

export default ListaTarefas;
