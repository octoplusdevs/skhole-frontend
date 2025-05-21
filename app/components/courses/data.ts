type StatusType = "ACTIVE" | "DRAFT" | "ARCHIVED" | "ENROLLED";

interface ICourse {
  id: number;
  title: string;
  price: number;
  details: {
    totalTime: string;
    lessonCount: number;
    category: string;
  };
  slug: string;
  thumbnail: string;
  status: StatusType;
}

const courses: ICourse[] = [
  {
    id: 0,
    title: "JavaScript do Zero ao Avançado",
    price: 149.9,
    details: {
      totalTime: "35h",
      lessonCount: 120,
      category: "prog",
    },
    slug: "javascript-do-zero-ao-avancado",
    thumbnail: "/node.png",
    status: "ACTIVE",
  },
  {
    id: 1,
    title: "Design UI/UX para Iniciantes",
    price: 99.9,
    details: {
      totalTime: "20h",
      lessonCount: 80,
      category: "design",
    },
    slug: "design-ui-ux-para-iniciantes",
    thumbnail: "/js.jpeg",
    status: "ENROLLED",
  },
  {
    id: 2,
    title: "React e TypeScript na Prática",
    price: 179.0,
    details: {
      totalTime: "28h",
      lessonCount: 100,
      category: "web",
    },
    slug: "react-e-typescript-na-pratica",
    thumbnail: "/ts.png",
    status: "ARCHIVED",
  },
  {
    id: 3,
    title: "Fotografia Profissional com o Celular",
    price: 79.9,
    details: {
      totalTime: "15h",
      lessonCount: 60,
      category: "photo",
    },
    slug: "fotografia-profissional-com-o-celular",
    thumbnail: "/js.jpeg",
    status: "DRAFT",
  },
  {
    id: 4,
    title: "Introdução ao Banco de Dados SQL",
    price: 129.0,
    details: {
      totalTime: "18h",
      lessonCount: 75,
      category: "data",
    },
    slug: "introducao-ao-banco-de-dados-sql",
    thumbnail: "/ts.png",
    status: "ENROLLED",
  },
  {
    id: 5,
    title: "Figma para Web Design Moderno",
    price: 89.9,
    details: {
      totalTime: "16h",
      lessonCount: 50,
      category: "design",
    },
    slug: "figma-para-web-design-moderno",
    thumbnail: "/node.png",
    status: "ACTIVE",
  },
  {
    id: 6,
    title: "Node.js com Express e MongoDB",
    price: 159.0,
    details: {
      totalTime: "30h",
      lessonCount: 110,
      category: "backend",
    },
    slug: "nodejs-com-express-e-mongodb",
    thumbnail: "/ts.png",
    status: "DRAFT",
  },
  {
    id: 7,
    title: "Python para Análise de Dados",
    price: 139.9,
    details: {
      totalTime: "22h",
      lessonCount: 90,
      category: "data",
    },
    slug: "python-para-analise-de-dados",
    thumbnail: "/node.png",
    status: "ENROLLED",
  },
  {
    id: 8,
    title: "Marketing Digital com Estratégias de Conteúdo",
    price: 119.0,
    details: {
      totalTime: "19h",
      lessonCount: 70,
      category: "marketing",
    },
    slug: "marketing-digital-com-estrategias-de-conteudo",
    thumbnail: "/js.jpeg",
    status: "ARCHIVED",
  },
];

export { courses };
