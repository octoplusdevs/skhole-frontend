import {
  Certificate,
  SealCheck,
  Star,
  UsersThree,
  Video,
} from "@phosphor-icons/react/dist/ssr";
import { AdvantageItem } from "./advantage-item";

interface ICourseAdvantages {
  averageRating: string;
  totalReviews: number;
  guaranteeDays: number;
  totalLessons: number;
  totalStudents: number;
}

export const CourseAdvantages = ({
  averageRating,
  totalReviews,
  guaranteeDays,
  totalLessons,
  totalStudents,
}: ICourseAdvantages) => {
  const courseAdvantages = [
    {
      id: 0,
      content:
        totalReviews === 0
          ? "Sem avaliações"
          : `${averageRating} (${totalReviews} ${
              totalReviews === 1 ? "avaliação" : "avaliações"
            })`,
      Icon: Star,
    },
    {
      id: 1,
      content: `Garantia de ${guaranteeDays} ${
        guaranteeDays === 1 ? "dia" : "dias"
      }`,
      Icon: SealCheck,
    },
    {
      id: 2,
      content:
        totalLessons === 0
          ? "Sem aulas"
          : `${totalLessons} ${
              totalLessons === 1 ? "aula incrível" : "aulas incríveis"
            }`,
      Icon: Video,
    },
    {
      id: 3,
      content: "Certificado de conclusão",
      Icon: Certificate,
    },
    {
      id: 4,
      content:
        totalStudents === 0
          ? "Sem estudantes"
          : `+${totalStudents} ${
              totalStudents === 1 ? "estudante" : "estudantes"
            }`,
      Icon: UsersThree,
    },
  ];

  return (
    <div className="flex flex-col gap-[18px]">
      {courseAdvantages.map(({ Icon, content, id }) => (
        <AdvantageItem
          key={id}
          content={content}
          Icon={Icon}
          highlight={id === 0}
        />
      ))}
    </div>
  );
};
