import { Certificate } from "@phosphor-icons/react";
import {
  SealCheck,
  Star,
  UsersThree,
  Video,
} from "@phosphor-icons/react/dist/ssr";

const modules = [
  {
    id: 1,
    title: "Introdução",
    percentage: 60,
    lessons: [
      "O que é HTML?",
      "Tags mais comuns",
      "Estrutura básica de um documento",
      "Boas práticas iniciais",
    ],
  },
  {
    id: 2,
    title: "CSS Básico",
    percentage: 40,
    lessons: ["Sintaxe do CSS", "Seletores", "Box Model", "Unidades de medida"],
  },
  {
    id: 3,
    title: "JavaScript Iniciante",
    percentage: 30,
    lessons: [
      "Variáveis e tipos de dados",
      "Operadores",
      "Condicionais",
      "Loops",
    ],
  },
];

const courseAdvantages = [
  { id: 0, content: "4.7 (2301 de avaliacoes)", Icon: Star },
  { id: 1, content: "Garantia de 7 dias", Icon: SealCheck },
  { id: 2, content: "85 aulas Incriveis", Icon: Video },
  { id: 3, content: "Certificado de conclusão", Icon: Certificate },
  { id: 4, content: "+3203 estudantes", Icon: UsersThree },
];

export { modules, courseAdvantages };
