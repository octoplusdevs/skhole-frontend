export const Categories = {
  WEB_DEVELOPMENT: "Desenvolvimento Web",
  MOBILE_DEVELOPMENT: "Desenvolvimento Mobile",
  DATA_SCIENCE: "Ciência de Dados",
  DEVOPS: "DevOps",
  GAME_DEVELOPMENT: "Desenvolvimento de Jogos",
  SECURITY: "Segurança",
  SOFT_SKILLS: "Habilidades Comportamentais",
  PROGRAMMING_LOGIC: "Lógica de Programação",
  CLOUD: "Computação em Nuvem",
  TESTING: "Testes",
  AI_ML: "IA e Machine Learning",
};

// import { ICourse, ILesson, IModule, IQuiz, StatusType } from "./interfaces/course";

// export function generateRandomCourses(count: number): ICourse[] {
//   const levels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"] as const;
//   const types = ["FREE", "PAID"] as const;
//   const statuses: StatusType[] = ["ACTIVE", "DRAFT", "ARCHIVED", "ENROLLED", "PENDING"];
//   const courses: ICourse[] = [];
//   for (let i = 1; i <= count; i++) {
//     const courseId = `course-${i}`;
//     const modules: IModule[] = [];

//     for (let m = 1; m <= 2; m++) {
//       const moduleId = `module-${i}-${m}`;
//       const lessons: ILesson[] = [];

//       for (let l = 1; l <= 2; l++) {
//         const lessonId = `lesson-${i}-${m}-${l}`;
//         const quizzes: IQuiz[] = [];

//         for (let q = 1; q <= 1; q++) {
//           const quizId = `quiz-${i}-${m}-${l}-${q}`;
//           quizzes.push({
//             id: quizId,
//             question: `Pergunta ${q} da Lição ${l}`,
//             correctAnswer: "Resposta correta",
//             points: 10,
//             responseFormat: "******** *******",
//             tip: "Pense na lógica da pergunta.",
//             isCorrect: true,
//             createdAt: new Date(),
//             updatedAt: new Date(),
//             lessonId,
//             moduleId,
//             courseId,
//           });
//         }

//         lessons.push({
//           id: lessonId,
//           title: `Lição ${l} do Módulo ${m}`,
//           content: `https://video.com/curso-${i}/modulo-${m}/licao-${l}`,
//           duration: 1200 + Math.floor(Math.random() * 600),
//           watched: false,
//           order: l,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           quizzes,
//         });
//       }

//       modules.push({
//         id: moduleId,
//         title: `Módulo ${m}`,
//         description: `Descrição do Módulo ${m}`,
//         slug: `modulo-${m}`,
//         duration: lessons.reduce((acc, cur) => acc + cur.duration, 0) / 60,
//         order: m,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         lessons,
//         contentCount: lessons.length,
//       });
//     }

//     courses.push({
//       id: courseId,
//       title: `Curso ${i}`,
//       description: `Descrição do curso ${i}`,
//       slug: `curso-${i}`,
//       price: Math.random() > 0.5 ? 0 : 100 + i * 10,
//       duration: modules.reduce((acc, cur) => acc + cur.duration, 0),
//       order: i,
//       maxStudents: 30 + i * 5,
//       hasLimitedSeats: i % 2 === 0,
//       type: types[i % 2],
//       rate: 4.7,
//       category: `Categoria ${i % 3}`,
//       level: levels[i % 3],
//       code: `CODE-${i}`,
//       author: `Autor ${i}`,
//       status: statuses[i % 3],
//       descountPercentage: Math.random() > 0.5 ? Math.floor(Math.random() * 50) : undefined,
//       priceWithDiscount: Math.random() > 0.5 ? (100 + i * 10) * (1 - (Math.floor(Math.random() * 50) / 100)) : undefined,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       modules,
//       enrollments: [],
//       testimonials: [],
//       Certificate: [],
//       Payment: [],
//       forumThread: [],
//       Quiz: [],
//     });
//   }

//   return courses;
// }
