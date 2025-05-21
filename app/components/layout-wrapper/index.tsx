"use client";
import { usePathname } from "next/navigation";
import { ILayoutWrapper } from "./interface";
import Header from "../ui/header/header";

export const LayoutWrapper = ({ children }: ILayoutWrapper) => {
  const pathname = usePathname();
  const isHiddenRoute = ["/login", "register"].includes(pathname);
  return (
    <>
      {!isHiddenRoute && <Header />}
      {children}
    </>
  );
};
