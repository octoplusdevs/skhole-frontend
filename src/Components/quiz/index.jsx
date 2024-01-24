import { Modal } from "../Modal"
import QuestionArea from "./question-area"

function Quiz(){
  return(
    <div className="container">
      <div className="bg-[#161817] flex flex-col gap-8 max-w-[800px] px-6 py-10">
        <header>
          <h2 className="text-white text-[24px] font-medium">
            Responda as questões abaixo
          </h2>
          <p className="text-[#969696] text-[18px] font-light">
            Responda às perguntas abaixo para completar esta seção e ganhar pontos!
          </p>
        </header>

        <form action="" className="">
          <div className="flex flex-col gap-16">
            <QuestionArea />
          </div>
        </form>
      </div>
    </div>
  )
}


export default Quiz
