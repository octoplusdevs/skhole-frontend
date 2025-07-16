export type StatusType =
  | "ACTIVE"
  | "DRAFT"
  | "ARCHIVED"
  | "ENROLLED"
  | "PENDING";

export type ROLES = "ADMIN" | "TEACHER" | "STUDENT";

export type CATEGORIES =
  | "WEB_DEVELOPMENT"
  | "MOBILE_DEVELOPMENT"
  | "DATA_SCIENCE"
  | "DEVOPS"
  | "GAME_DEVELOPMENT"
  | "SECURITY"
  | "SOFT_SKILLS"
  | "PROGRAMMING_LOGIC"
  | "CLOUD"
  | "TESTING"
  | "AI_ML";

export interface Author {
  fullName: string;
  email: string;
  role: ROLES;
}

export interface User {
  email: string;
  fullName: string;
  role: "ADMIN" | "TEACHER" | "STUDENT";
}

export interface Instructor {
  user: User;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModuleLesson {
  moduleId: string;
  lessonId: string;
  order: number;
  lesson: Lesson;
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
  lessons: ModuleLesson[];
}

export interface CourseModule {
  id: string;
  courseId: string;
  moduleId: string;
  isMandatory: boolean;
  order: number;
  releaseDate: string | null;
  status: "DRAFT" | "PUBLISHED" | string;
  module: Module;
}

export interface IQuiz {
  id: string;
  question: string;
  correctAnswer: string;
  points: number;
  responseFormat: string;
  tip: string;
  createdAt: Date;
  updatedAt: Date;
  isCorrect?: boolean;
  lessonId?: string;
  moduleId?: string;
  courseId?: string;
}

export interface ICourseReviews {
  classification: number;
  courseId: string;
  id: string;
  userId: string;
}

export interface IEnrollments {
  courseId: string;
  createdAt: Date;
  enrolledAt: Date;
  id: string;
  paymentId: string | null;
  status: "ACTIVE" | "INACTIVE";
  userId: string;
}

// curso
export interface ICourse {
  id: string;
  title: string;
  description: string;
  slug: string;
  price: number;
  duration: number;
  order: number;
  maxStudents: number;
  hasLimitedSeats: boolean;
  descountPercentage?: number;
  priceWithDiscount?: number;
  type: "FREE" | "PAID";
  rate: number;
  category: CATEGORIES;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  code: string;
  author: string;
  authorUser: Author;
  status: StatusType;
  discount: number;
  guarantee: number;
  createdAt: Date;
  updatedAt: Date;

  modules: CourseModule[];
  enrollments: IEnrollments[];
  testimonials: string[];
  Certificate: string[];
  Payment: string[];
  forumThread: string[];
  Quiz: string[];
  Instructors: Instructor[];
  CourseReviews: ICourseReviews[];
}

export interface IWatchedLesson {
  courseId: string;
  createdAt: Date;
  id: string;
  lessonId: string;
  moduleId: string;
  status: "IN_PROGRESS" | "COMPLETED";
  timeWatched: number;
  userId: string;
}
