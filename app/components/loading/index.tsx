import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <CircleNotch size={64} color="#baf722" className="animate-spin" />
    </div>
  );
};

export { Loading };
