import { NavLink } from "react-router-dom";
import { Wrapper, Button } from "./style";
import { User, Palette, CreditCard, Medal, Key } from "phosphor-react";
import { useState } from "react";
import { useEffect } from "react";

const TABS = [
  {
    id: 1,
    text: "Editar Perfil",
    path: "/me/profile",
    Icon: <User weight="fill" size={18} />,
  },
  {
    id: 2,
    text: "Palavra-Passe",
    path: "/me/password",
    Icon: <Key weight="fill" size={18} />,
  },
  {
    id: 3,
    text: "Certificados",
    path: "/me/certificates",
    Icon: <Medal weight="fill" size={18} />,
  },
  {
    id: 4,
    text: "Métodos de pagamento",
    path: "/me/biling",
    Icon: <CreditCard weight="fill" size={18} />,
  },
  {
    id: 5,
    text: "Aparência",
    path: "/me/apparence",
    Icon: <Palette weight="fill" size={18} />,
  },
];

export function SidebarProfile({ activeTab, setActiveTab }) {
  const handleTabClick = (path) => {
    setActiveTab(path);
  };
  return (
    <Wrapper>
      <nav className="sidebar">
        <ul>
          {TABS.map(({ Icon, id, path, text }) => (
            <li key={id}>
              <NavLink to={path}>
                <Button
                  className={`${activeTab === path ? "active" : ""}`}
                  onClick={() => handleTabClick(path)}
                >
                  {Icon} {text}
                </Button>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
}
