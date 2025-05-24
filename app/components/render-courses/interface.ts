import { ReactNode } from "react";

interface ICourseSection {
  courses: any[];
  title: string;
  children?: ReactNode;
}

export type { ICourseSection };
