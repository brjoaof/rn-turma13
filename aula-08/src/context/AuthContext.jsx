import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (email, senha) => {
    // lógica do login com api
    if (email == "joao@serratec.org" && senha == "senha@123") {
      console.log("Usuário Logado com Sucesso!!!");
      setUser({ user: "João Felipe", role: "admin", token: "ejy342..." });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const verificaNivelAcesso = (permissao) => {
    if (user.role == permissao) return true;
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout, verificaNivelAcesso }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
