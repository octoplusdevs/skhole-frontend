import { useContext } from "react";
import { AuthContext } from "../../../aula-08/src/contexts/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
