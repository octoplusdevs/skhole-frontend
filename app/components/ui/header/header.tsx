"use client";

import { useAuth } from "@/context/auth-context";
import { Container } from "../../container";
import Link from "next/link";
import { MENU } from "./data";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { User } from "@/components/user";
import { X, List } from "@phosphor-icons/react";
import { useSetItemLocalStorage } from "@/hooks/localStorage/useSetItemLocalStorage";
import { useGetItemLocalStorage } from "@/hooks/localStorage/useGetItemLocalStorage";

const Header = () => {
  const { user, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState<string>();
  const [menuMobileStatus, setMenuMobileStatus] = useState<boolean>(false);

  const toggleMenuMobileStatus = (status: boolean) => {
    setMenuMobileStatus(status);
  };

  const navigate = (target: string, menuStatus: boolean) => {
    setCurrentPage(target);
    useSetItemLocalStorage("currentPage", target);
    toggleMenuMobileStatus(menuStatus);
  };

  useEffect(() => {
    const storedPage = useGetItemLocalStorage("currentPage");
    setCurrentPage(storedPage);
  }, []);

  return (
    <header className="bg-secondary fixed w-full">
      <Container className="flex justify-between items-center gap-4 relative h-14 sm:h-20">
        <Logo />
        <nav id="menu-desktop" className="hidden gap-6 md:flex">
          {MENU.map(({ content, id, target }) => (
            <Link
              href={target}
              key={id}
              onClick={() => {
                navigate(target, false);
              }}
              className={`text-[16px] font-medium text-link hover:text-logo duration-150 ${
                currentPage === target && "text-white"
              }`}
            >
              {content}
            </Link>
          ))}
        </nav>
        <nav
          id="menu-mobile"
          className={`flex flex-col gap-4 md:hidden bg-card-foreground absolute top-20 left-0 h-[100dvh] duration-150 overflow-x-scroll pt-4 ${
            menuMobileStatus ? "w-full px-4" : "w-0 px-0"
          }`}
        >
          {MENU.map(({ content, id, target }) => (
            <Link
              href={target}
              key={id}
              onClick={() => {
                navigate(target, false);
              }}
              className={`text-[16px] font-medium text-link hover:text-logo duration-150 ${
                currentPage === target && "text-white"
              } ${menuMobileStatus ? "opacity-100" : "opacity-0"}`}
            >
              {content}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 items-center">
          {user && (
            <User
              email={user.email}
              id={user.id}
              name={user.name}
              role={user.role}
            />
          )}
          <div id="buttons-mobile" className="md:hidden">
            {menuMobileStatus ? (
              <X
                size={24}
                color="#fff"
                className="cursor-pointer"
                onClick={() => toggleMenuMobileStatus(false)}
              />
            ) : (
              <List
                size={24}
                color="#fff"
                className="cursor-pointer"
                onClick={() => toggleMenuMobileStatus(true)}
              />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
