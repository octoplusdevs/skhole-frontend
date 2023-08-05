import { useEffect } from "react";
// import { Redirect, useLocation } from "react-router-dom";
import { SidebarProfile } from "../../Components/SidebarProfile";
import { useState } from "react";
import { Main, Content } from "./style";
import { EditProfile } from "./Edit-Profile";
import { ChangePassword } from "./ChangePassword";
import { Certificates } from "./Certificates";
import { Biling } from "./Biling";
import { Apparence } from "./Apparence";

export function Profile() {
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <Main>
      <div className="container">
        <SidebarProfile activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content>
          {activeTab === "/me/profile" ? <EditProfile /> : null}
          {activeTab === "/me/password" ? <ChangePassword /> : null}
          {activeTab === "/me/certificates" ? <Certificates /> : null}
          {activeTab === "/me/biling" ? <Biling /> : null}
          {activeTab === "/me/apparence" ? <Apparence /> : null}
        </Content>
      </div>
    </Main>
  );
}
