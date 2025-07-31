"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar } from "./avatar";
import { Badge, LogOut, User } from "lucide-react";
import { Certificate } from "@phosphor-icons/react";
import { useAuth } from "@/context/auth-context";
import { Button } from "./button";
import { ModalLogout } from "./modal-logout";

interface DropdownMenuProps {
  name: string;
  imageUrl?: string;
}

export const DropdownMenu = ({ name, imageUrl }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="relative inline-block text-left">
        <button onClick={() => setOpen(!open)}>
          <Avatar name={name} imageUrl={imageUrl} />
        </button>

        {open && (
          <div className="absolute lg:right-0 right-[-32px] mt-8 w-[320px] max-h-[400px] bg-secondary border border-zinc-700 rounded-md shadow-lg z-50 text-white">
            <div className="p-6 text-sm border-b border-zinc-700">
              Minha Conta
            </div>
            <button
              onClick={() => router.push("/perfil")}
              className="w-full text-left p-6 text-sm hover:bg-[#19243b]"
            >
              <User className="inline mr-2" size={20} color="#bbf722c9" />
              <span>Perfil</span>
            </button>
            <button
              onClick={() => router.push("/badges")}
              className="w-full text-left p-6 text-sm hover:bg-[#19243b]"
            >
              <Badge className="inline mr-2" size={20} color="#bbf722c9" />
              <span>Meus Badges</span>
            </button>
            <button
              onClick={() => router.push("/certificados")}
              className="w-full text-left p-6 text-sm hover:bg-[#19243b]"
            >
              <Certificate
                className="inline mr-2"
                size={20}
                color="#bbf722c9"
              />
              <span>Meus Certificados</span>
            </button>
            <button
              onClick={() => {
                setModalState(true), setOpen(false);
              }}
              className="w-full text-left p-6 text-sm hover:bg-[#19243b] text-red-400"
            >
              <LogOut className="inline mr-2" size={20} />
              <span>Sair da conta</span>
            </button>
          </div>
        )}
      </div>
      <ModalLogout
        continueLoggedIn={() => setModalState(false)}
        logout={() => {
          setModalState(false), logout();
        }}
        modalState={modalState}
      />
    </>
  );
};
