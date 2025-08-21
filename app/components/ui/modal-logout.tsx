import { Button } from "./button";

interface IModalLogout {
  modalState: boolean;
  logout: () => void;
  continueLoggedIn: () => void;
}

const ModalLogout = ({
  continueLoggedIn,
  logout,
  modalState,
}: IModalLogout) => {
  return (
    <div
      className={`absolute top-0 duration-150 left-0 w-full h-dvh z-50 flex items-center justify-center ${modalState
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className="bg-[#00000081] w-full h-dvh z-[60] absolute top-0 left-0"
        onClick={continueLoggedIn}
      ></div>
      <div className="z-[100] bg-secondary rounded-[4px] flex flex-col gap-4 p-4 items-center justify-center border border-zinc-700">
        <h4>Deseja terminar a sessão?</h4>
        <div className="flex gap-2">
          <Button
            className="text-white rounded-[2px] bg-transparent border border-[#3b3b3bbb] hover:text-black"
            onClick={logout}
          >
            Sim
          </Button>
          <Button
            className="text-white rounded-[2px] bg-transparent border border-[#3b3b3bbb] hover:bg-[#3b3b3bbb]"
            onClick={continueLoggedIn}
          >
            Não
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ModalLogout };
