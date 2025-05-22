type StatusType = "ACTIVE" | "DRAFT" | "ARCHIVED" | "ENROLLED" | "PENDING";

interface ILesson {
  id: number;
  title: string;
  slug: string;
  watched: boolean;
  description: string;
  duration: number;
}

interface IModule {
  id: number;
  title: string;
  percentage: number;
  lessons: ILesson[];
}

interface ICourse {
  id: number;
  title: string;
  price: number;
  details: {
    totalTime: number;
    lessonCount: number;
    category: string;
    evaluation: number;
  };
  slug: string;
  thumbnail: string;
  status: StatusType;
  modules: IModule[];
}

export type { ICourse, IModule, ILesson };
