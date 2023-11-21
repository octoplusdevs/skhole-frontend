import { useQuery } from "@tanstack/react-query";
import { useCourses } from "../../hooks/useCourses";
import { useParams } from "react-router-dom";
import { Star, Certificate, Video, SealCheck, UsersThree, User, Play, CaretDown } from "@phosphor-icons/react";
import { Wrapper, BannerCourse, Draft, Modules, ProgressBar } from "./style";
import { API } from "../../services/api";
import { useState } from "react";
// import Loader from "../../Components/Loader";
// import { CourseCard } from "../../Components/card";


const MODULES = [
  {
    title: "Introducao",
    progress: 67,
    moduleNumber: 1,
    content: [
      "Boas-vindas!",
      "O que é UI & UX Design",
      "Briefing: Sua importância e como aplicar"
    ]
  },
  {
    title: "Exemplos",
    progress: 35,
    moduleNumber: 2,
    content: [
      "Boas-vindas!",
      "O que é UI & UX Design",
      "Briefing: Sua importância e como aplicar"
    ]
  },
  {
    title: "Coisas avancadas",
    progress: 58.4,
    moduleNumber: 3,
    content: [
      "Boas-vindas!",
      "O que é UI & UX Design",
      "Briefing: Sua importância e como aplicar"
    ]
  }
]

function Item({title, progress, moduleNumber, content}){
  const [active, setActive] = useState(false);

  function toggleAccordion() {
    setActive(!active);
  }

  return (
    <li key={moduleNumber} onClick={toggleAccordion}>
      <div className="module">
          <div className="module__header">
            <div className="module__left">
              <div className="module__number">
                <span>{moduleNumber}</span>
              </div>
              <div className="module__title">
                <h2>{title}</h2>
                <div className="progress">
                  <span>{progress}%</span>
                  <ProgressBar className="progress-bar" progress={progress}/>
                </div>
              </div>
            </div>
            <button >
              <CaretDown className={`${active ? 'active':'inactive'}`} color="#fff" size={24} />
            </button>
          </div>
          <div className={`${active ? 'open':''} module__content`}>
            <ul>
              {
                content.map((item, index)=>(<li key={item}><h3><span>{`${moduleNumber}.${index+1} `}</span>{item}</h3></li>))
              }
            </ul>
          </div>
      </div>
    </li>
  )
}

export function Course() {
  const { slug_course } = useParams();
  const [openModule, setOpenModule] = useState(true)

  const { data } = useQuery(["course"], async () => {
    const response = await API.get(`/courses/${slug_course}`);
    return response.data;
  });

  console.log(data)

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="main">
            <BannerCourse>
              <div className="course__brand"></div>
              <div className="course__heading">
                <h1>Pixel Perfect Básico</h1>
                <p>For athletes, high altitude produces two contradictory effects on performance. For explosive events For athletes, high altitude produces two contradictory effects on performance. For explosive events </p>
              </div>
              <div className="course__progress">
                <div className="progress">
                  <span>16%</span>
                  <div className="progress-bar"></div>
                </div>
                <span>51 - 85 aulas assistidas por voce</span>
              </div>
              <button className="course__button">
                <Play />
                Assistir Amostra
              </button>
            </BannerCourse>

            <div className="content">
              <h2>Conteudo do Curso</h2>
              <Modules>

                {
                  MODULES.map(({title, progress, moduleNumber, content})=> (
                    <Item title={title} progress={progress} moduleNumber={moduleNumber} content={content} />
                  ))
                }
              </Modules>
            </div>
          </div>
          <Draft>
            <div className="draft-cta">
              <h3>17.000 kz</h3>
              <button>Comprar agora</button>
            </div>
            <div className="benefits">
              <ul>
                <li>
                  <Star color="#F9FD47" weight="fill" size={24} />
                  <span>4.7 (2301 de avaliacoes)</span>
                </li>
                <li>
                  <SealCheck color="#fff" weight="fill" size={24} />
                  <span>Garantia de 7 dias</span>
                </li>
                <li>
                  <Video color="#fff" weight="fill" size={24} />
                  <span>85 aulas Incriveis</span>
                </li>
                <li>
                  <Certificate color="#fff" weight="fill" size={24} />
                  <span>Certificado de conclusão</span>
                </li>
                <li>
                  <UsersThree color="#fff" weight="fill" size={24} />
                  <span>+3203 estudantes</span>
                </li>
              </ul>
            </div>

            <div className="trainer">
              <div className="trainer-avatar">
                <User size={22} color="#ffffff" />
              </div>
              <div className="trainer-info">
                <h4>Wilmy Danguya</h4>
                <span>Instrutor do Curso</span>
              </div>
            </div>
          </Draft>
        </div>
      </Wrapper>
    </>
  );
}
