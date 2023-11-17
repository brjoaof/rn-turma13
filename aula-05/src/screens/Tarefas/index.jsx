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
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);
  const [estaEditando, setEstaEditando] = useState({
    status: false,
    id: 0,
  });

  const adicionarTarefa = () => {
    if (novaTarefa == "") return;

    const tarefa = {
      id: new Date().getTime(),
      titulo: novaTarefa,
      estaConcluida: false,
      prioridade: "normal",
    };

    setListaTarefas([...listaTarefas, tarefa]);
    setNovaTarefa("");
  };

  const excluirTarefa = (id) => {
    //excluir uma tarefa
    const novoArray = listaTarefas.filter((tarefa) => tarefa.id != id);
    setListaTarefas(novoArray);
  };

  const editarTarefa = (item) => {
    setEstaEditando({ status: true, id: item.id });
    setNovaTarefa(item.titulo);
  };

  const salvarAlteracoes = () => {
    const tarefa = {
      id: estaEditando.id,
      titulo: novaTarefa,
      estaConcluida: false,
      prioridade: "normal",
    };

    const arrayEditado = listaTarefas.map((item) => {
      if (item.id == tarefa.id) {
        return tarefa;
      }
      return item;
    });

    setListaTarefas(arrayEditado);
    setNovaTarefa("");
    setEstaEditando({ status: false, id: 0 });
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
      {!estaEditando.status ? (
        <Button title="Adicionar Tarefa +" onPress={adicionarTarefa} />
      ) : (
        <Button
          color="green"
          title="Salvar Alterações"
          onPress={salvarAlteracoes}
        />
      )}

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

      <ListaTarefas
        listaTarefas={listaTarefas}
        excluirTarefa={excluirTarefa}
        editarTarefa={editarTarefa}
      />
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
