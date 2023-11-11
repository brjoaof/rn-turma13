import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Home from "./src/view/Home";
import State from "./src/view/State";

export default function App() {
  const nome = "João Felipe";
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <State />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center",
  },
  nome: {
    fontSize: 50,
  },
});
