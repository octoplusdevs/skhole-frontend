import { ReactNode } from "react";

type StatusType = "ACTIVE" | "DRAFT" | "ARCHIVED" | "ENROLLED";

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
  content?: string;
  className?: string;
  Icon?: ReactNode;
  target: string;
  onClick: () => void;
  status: StatusType;
}

export type { IRoot, IThumbnail, ITitle, IPrice, IDetail, IButton };
