import { IContainer } from "./interface";

export const Container = ({ children, className }: IContainer) => {
  return (
    <div className={`w-full max-w-[1210px] px-4 m-auto ${className}`}>
      {children}
    </div>
  );
};
