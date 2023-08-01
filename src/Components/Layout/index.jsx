import { Outlet, useLocation } from "react-router";
import { Header } from "../Header";

function OtherComponent() {
  console.log("OtherComponent renderizado");
  return <h1>OtherComponent</h1>;
}

export function Layout() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const activeLocation = pathSegments[1];
  console.log("Layout renderizado");
  return (
    <main className="layout">
      <OtherComponent />
      <Header.Root>
        <Header.Logo />
        <Header.Navigation activeLocation={activeLocation} />
        <Header.Avatar />
      </Header.Root>
      <Outlet />
    </main>
  );
}
