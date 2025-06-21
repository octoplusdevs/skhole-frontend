type StatusType = "ACTIVE" | "DRAFT" | "ARCHIVED" | "ENROLLED" | "PENDING";
type ROLES = "ADMIN" | "TEACHER" | "STUDENT";
type CATEGORIES =
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

interface IQuiz {
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

interface ILesson {
  id: string;
  title: string;
  content: string;
  duration: number;
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
  watched?: boolean;
  quizzes?: IQuiz[];
}

interface IModule {
  id: string;
  title: string;
  description: string;
  slug: string;
  duration: number;
  order: number;
  lessons: ILesson[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface IModule {
  id: string;
  title: string;
  contentCount: number;
}

interface author {
  fullName: string;
  email: string;
  role: ROLES;
}

interface ICourse {
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
  authorUser: author;
  status: StatusType;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
  modules: IModule[];
  enrollments: string[];
  testimonials: string[];
  Certificate: string[];
  Payment: string[];
  forumThread: string[];
  Quiz: string[];
}
export type { ICourse, IModule, ILesson, IQuiz, StatusType };
