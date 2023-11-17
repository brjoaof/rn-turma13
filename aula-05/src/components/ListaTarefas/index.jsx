import { Text, FlatList, View, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ListaTarefas = ({ listaTarefas, excluirTarefa, editarTarefa }) => {
  return (
    <FlatList
      data={listaTarefas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#f1f1f1", fontSize: 35 }}>{item.titulo}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "baseline", gap: 6 }}
          >
            <TouchableOpacity onPress={() => editarTarefa(item)}>
              <Feather name="edit" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => excluirTarefa(item.id)}>
              <EvilIcons name="trash" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default ListaTarefas;
