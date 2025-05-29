import { IContainer } from "./interface";

export const Container = ({ children, className }: IContainer) => {
  return (
    <div className={`w-full max-w-inner px-[52px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
