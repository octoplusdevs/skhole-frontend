import { IRoot } from "./interface";

const Root = ({ children, className }: IRoot) => {
  return (
    <div className={`bg-secondary w-full flex flex-col rounded-2xl p-8 gap-4 ${className}`}>
      {children}
    </div>
  );
};

export { Root };
