import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import ListaTarefas from "../../components/ListaTarefas";

const Tarefas = () => {
  const [novaTarefa, setNovaTarefa] = useState("Nova Tarefa");
  const [listaTarefas, setListaTarefas] = useState([1, 2, 3, 4]);

  const adicionarTarefa = () => {
    if (novaTarefa == "") return;

    setListaTarefas([...listaTarefas, novaTarefa]);
    setNovaTarefa("");

    console.log([...listaTarefas, novaTarefa]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Tarefas</Text>
        <FontAwesome5
          style={{ paddingTop: 7 }}
          name="tasks"
          size={35}
          color="white"
        />
      </View>

      <TextInput
        value={novaTarefa}
        onChangeText={setNovaTarefa}
        style={{
          backgroundColor: "#f1f1f1",
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
          marginBottom: 15,
        }}
        placeholder="Adicione uma tarefa"
      />

      <Button title="Adicionar Tarefa +" onPress={adicionarTarefa} />

      {/* <TouchableOpacity
        style={{
          backgroundColor: "orange",
          padding: 9,
        }}
        activeOpacity={0.7}
      >
        <Text style={{ textAlign: "center" }}>Adicionar Tarefa +</Text>
      </TouchableOpacity> */}
      {/* Jeito React WEB */}
      {/* {listaTarefas.map((tarefa, index) => (
        <Text key={index} style={{ color: "#f1f1f1", fontSize: 35 }}>
          {tarefa}
        </Text>
      ))} */}

      {/* Componentizar a Lista de Tarefas */}

      <ListaTarefas listaTarefas={listaTarefas} />
    </View>
  );
};

export default Tarefas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 30,
    backgroundColor: "#101010",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  titulo: {
    color: "#f1f1f1",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
});
