type StatusType = "ACTIVE" | "DRAFT" | "ARCHIVED" | "ENROLLED" | "PENDING";

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
  category: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  code: string;
  author: string;
  status: StatusType;
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
