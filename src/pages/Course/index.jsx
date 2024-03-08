import { useQuery } from "@tanstack/react-query";
import { useCourse, useCourses } from "../../hooks/useCourses";
import { Link, useParams } from "react-router-dom";
import { Star, Certificate, Video, SealCheck, UsersThree, User, Play, CaretDown } from "@phosphor-icons/react";
import { Wrapper, BannerCourse, Draft, Modules, ProgressBar } from "./style";
import { API } from "../../services/api";
import { useState } from "react";
import { formatCurrency } from "@/utils";
import useEnrollment from "@/hooks/useSubscribeCourse";
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

function Item({title, progress, moduleNumber, content, ...rest}){
  const [active, setActive] = useState(false);

  function toggleAccordion() {
    setActive(!active);
  }

  return (
    <li key={moduleNumber} onClick={toggleAccordion} {...rest}>
      <div className="module">
          <div className="module__header">
            <div className="module__left">
              <div className="module__number">
                <span>{moduleNumber}</span>
              </div>
              <div className="module__title">
                <h2>{title}</h2>
                {/* <div className="progress">
                  <span>{progress}%</span>
                  <ProgressBar className="progress-bar" progress={progress}/>
                </div> */}
              </div>
            </div>
            <button >
              <CaretDown className={`${active ? 'active':'inactive'}`} color="#fff" size={24} />
            </button>
          </div>
          <div className={`${active ? 'open':''} module__content`}>
            <ul>
              {
                content.sort((a,b)=> a.lesson_number - b.lesson_number).map(({title,id, lesson_number}, index)=>(<li key={id}><h3><span>{lesson_number}</span>{title}</h3></li>))
              }
            </ul>
          </div>
      </div>
    </li>
  )
}

export default function Course() {
  const { slug_course } = useParams();
  const { mutate, isLoading: isEnrolling } = useEnrollment();

  function handleEnroll(course_id) {
    mutate(course_id);
  }

  const { data: course } = useCourse(slug_course);
  console.log(course)
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="main">
            <BannerCourse>
              <div className="course__brand"></div>
              <div className="course__heading">
                <h1>{course?.title}</h1>
                <p className="!text-gray-300">{course?.description}</p>
              </div>
              {/* <div className="course__progress">
                <div className="progress">
                  <span>16%</span>
                  <div className="progress-bar"></div>
                </div>
                <span>51 - 85 aulas assistidas por voce</span>
              </div> */}
              <Link disabled className="course__button !bg-slate-700 select-none p-6 grid pointer-events-none place-content-center rounded-[4px] !text-white !font-medium hover:!bg-slate-600">
                <Play />
                Assistir Amostra
              </Link>
            </BannerCourse>

            <div className="content">

              {course?.modules?.length <= 0 ? <h2>Ainda sem conteúdo!</h2> : <h2>Conteudo do Curso</h2>}
              <Modules>
                {
                  course?.modules?.map(({title, videos, id, module_number})=> (
                    <Item key={id} title={title} progress={0} moduleNumber={module_number} content={videos} />
                  ))
                }
              </Modules>
            </div>
          </div>
          <Draft>
            <div className="draft-cta">
              {parseFloat(course?.price) > 0 ? <h3>{formatCurrency(course?.price)}</h3> : <h3>Gratuito</h3>}
              {
                (course?.subscribed && !course?.enrollment?.confirmed && course?.enrollment?.status === "active") && (
                  <Link disabled={true} className="!bg-slate-700 p-6 grid place-content-center rounded-[4px] !text-yellow-400 !font-medium pointer-events-none select-none">Em verificação...</Link>
              )
              }
              {
                course?.subscribed && course?.enrollment?.confirmed && course?.enrollment?.status === "active" &&
                  <Link to={`/courses/watch/${course?.slug}`} className="!bg-slate-700 p-6 grid place-content-center rounded-[4px] !text-white !font-medium hover:!bg-slate-600">Ir para o curso</Link>
              }
              {
                !course?.subscribed && (course?.enrollment?.status === "active" || course?.enrollment === null) && (<button className="!p-6 grid place-content-center text-base hover:!bg-green-300 transition-[background-color] duration-[0.4s] rounded-[4px] !font-medium" onClick={() => handleEnroll(course?.id)} disabled={isEnrolling}>Inscrever-se</button>)
              }
            </div>
            <div className="benefits">
              <ul>
                {/* <li>
                  <Star color="#F9FD47" weight="fill" size={24} />
                  <span>4.9</span>
                </li> */}
                 {parseFloat(course?.price) > 0 &&
                  <li>
                    <SealCheck color="#fff" weight="fill" size={24} />
                    <span>Garantia de 7 dias</span>
                  </li>
                }
                <li>
                  <Video color="#fff" weight="fill" size={24} />
                  <span>{course?.modules
                      .map((module) => module.videos.length)
                      .reduce((acc, curr) => acc + curr, 0)} aulas Incriveis</span>
                </li>
                <li>
                  <Certificate color="#fff" weight="fill" size={24} />
                  <span>Certificado de conclusão</span>
                </li>
                {/* <li>
                  <UsersThree color="#fff" weight="fill" size={24} />
                  <span>+3203 estudantes</span>
                </li> */}
              </ul>
            </div>

            <div className="flex flex-col gap-4">

              {course?.modules?.length >= 1 && <h4 className="text-white">Instructores</h4>}
              <div className="flex flex-col gap-4">
                {
                  course?.instructors?.map(({id,first_name, last_name, avatar})=>(
                    <div className="trainer" key={id}>
                    <div className="trainer-avatar">
                      {
                        avatar?.url !== null ? (<img className="object-cover rounded-[50%] w-full h-full overflow-hidden" src={avatar?.url} />):(<User size={22} color="#ffffff" />)
                      }
                    </div>
                    <div className="trainer-info">
                      <h4>{`${first_name} ${last_name}`}</h4>
                      <span>Instrutor do Curso</span>
                    </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </Draft>
        </div>
      </Wrapper>
    </>
  );
}
