import { Outlet, useLocation } from "react-router";
import { Header } from "../Header";

export function Layout() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const activeLocation = pathSegments[1];
  return (
    <main className="layout">
      <Header.Root>
        <Header.Logo />
        <Header.Navigation activeLocation={activeLocation} />
        <Header.Points />
        <Header.Avatar />
      </Header.Root>
      <Outlet />
    </main>
  );
}
