import { useEffect } from "react";
import { Header } from "../../Components/Header";
import { SidebarProfile } from "../../Components/SidebarProfile";
import { useState } from "react";
import { Main, Content } from "./style";

export function Profile() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Main>
        <SidebarProfile activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content>
          <h1>{activeTab === "/me/profile" ? "Editar Perfil" : "OUTRO LADO!"}</h1>
        </Content>
      </Main>
    </>
  );
}
