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

interface IPrice {
  content: number;
  className?: string;
}

interface IDetail {
  content: any;
  className?: string;
  Icon?: ReactNode;
}

interface IButton {
  content: string;
  className?: string;
  Icon?: ReactNode;
  target: string;
}

export type { IRoot, IThumbnail, ITitle, IPrice, IDetail, IButton };
