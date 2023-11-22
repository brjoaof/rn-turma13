import React, { createContext } from "react";

export const MeuContexto = createContext();

const MeuContextoProvider = ({ children }) => {
  return (
    <MeuContexto.Provider value={{ nome: "Carlos Paz" }}>
      {children}
    </MeuContexto.Provider>
  );
};

export default MeuContextoProvider;
