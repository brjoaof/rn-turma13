import AuthProvider from "./src/context/AuthContext";
import MeuContextoProvider from "./src/context/Contexto";
import Rotas from "./src/routes";

export default function App() {
  return (
    <MeuContextoProvider>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </MeuContextoProvider>
  );
}
