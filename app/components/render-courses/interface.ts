import { ICourse } from "@/utils/interfaces/course";
import { ReactNode } from "react";

interface ICourseSection {
  courses: ICourse[];
  enrolledCourses: IEnrollment[];
  title: string;
  children?: ReactNode;
}

interface IPaymentsDetails {
  courseId: string;
  paymentsStatus: "COMPLETED" | "PENDING" | "FAILED" | "CANCELED";
  amount: number;
}

interface IPayment {
  id: string;
  userId: string;
  courseId: string;
  amount: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
  createdAt: string;
  updatedAt: string;
}

interface IEnrollment {
  enrollmentId: string;
  enrolledAt: string;
  courseId: string;
  title: string;
  description: string;
  status: "ACTIVE" | "ENROLLED" | "PENDING";
  category: "WEB_DEVELOPMENT" | "DATA_SCIENCE" | "DESIGN" | string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | string;
  type: "FREE" | "PAID" | string;
  payments: IPayment[];
}

export type { ICourseSection, IEnrollment, IPaymentsDetails };
