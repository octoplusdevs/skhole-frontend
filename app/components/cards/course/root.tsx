import { IRoot } from "./interface";

const Root = ({ children, className }: IRoot) => {
  return (
    <div
      className={`bg-secondary w-full rounded-xl flex flex-col gap-[42px] ${className}`}
    >
      {children}
    </div>
  );
};

export { Root };
