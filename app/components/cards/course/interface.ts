import { ReactNode } from "react";

type StatusType = "ACTIVE" | "DRAFT" | "ARCHIVED" | "ENROLLED" | "PENDING";

interface IRoot {
  children: ReactNode;
  className?: string;
}

interface IThumbnail {
  src: string;
  alt?: string;
  className?: string;
  onClick: () => void;
  target: string;
}

interface ITitle {
  content: string;
  subtitle?: string
  className?: string;
}

interface IRate {
  content: number;
  className?: string;
}

interface IPrice {
  content: number;
  className?: string;
  discount: number;
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
  onClick: () => void;
  status: StatusType;
}

export type { IRoot, IThumbnail, ITitle, IPrice, IDetail, IButton, IRate };
