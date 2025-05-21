import { ReactNode } from "react";

interface IRoot {
  children: ReactNode;
  className?: string;
}

interface IThumbnail {
  src: string;
  alt?: string;
  className?: string;
}

interface ITitle {
  content: string;
  className?: string;
}

interface IDescription {
  content: string;
  className?: string;
}

export type { IRoot, IThumbnail, ITitle, IDescription };
