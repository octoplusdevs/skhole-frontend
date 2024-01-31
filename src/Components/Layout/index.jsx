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
        <div className="flex gap-4 sm:gap-8 items-center">
          <Header.Points />
          <Header.Avatar />
        </div>
      </Header.Root>
      <Outlet />
    </main>
  );
}
