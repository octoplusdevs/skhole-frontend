import { ReactNode } from "react";

export interface ICheckbox {
  onClick: () => void;
  title?: string;
  watched: boolean;
  duration?: number;
  check: () => void;
}
