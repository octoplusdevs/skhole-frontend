"use client";

import { useAuth } from "@/context/auth-context";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <span>Bem-vindo, {user?.name || "Visitante"}</span>
      {user && <button onClick={logout}>Sair</button>}
    </div>
  );
};

export default Header;
