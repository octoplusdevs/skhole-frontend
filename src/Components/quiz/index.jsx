import { QUESTIONS } from "./data"
import ModalQuiz from "./modal"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Points } from "./points"
import Question from "./question"
import { Buttons } from "./buttons"
import { Format } from "./format"

function Quiz(){
  const [currentTip, setCurrentTip] = useState('')
  const [activateModal, setActivateModal] = useState(false)
  const [focusedInputId, setFocusedInputId] = useState(100)

  const hideResponseFormat = (e, id) => {
    const currentTextSize = e.currentTarget.value.length

    if(currentTextSize > 0){
      return setFocusedInputId(id)
    }
    setFocusedInputId(100)
  }

  const openTipModal = (tip) => {
    setActivateModal(prev=> !prev)
    setCurrentTip(tip)
  }

  const closeTipModal = () => {
    setActivateModal(false)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

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

        <ModalQuiz
          onClick={closeTipModal}
          visible={activateModal}
          hint={currentTip}
        />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-16">
          {QUESTIONS.map(({
            id,
            format,
            hasUserAnswered,
            hint,
            points,
            question_text,
            right_answer })=>(
            <div key={id} className="flex flex-col gap-8">
              <Points points={points}/>
              <Question question_text={question_text}/>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
                <div className="flex w-full h-max rounded-[4px] border border-[#303030] relative">
                  <Input
                    disabled={ hasUserAnswered ? true : false }
                    className={`font-semibold text-[18px] text-[#7D7D7D] border-none py-11 pl-8 w-full
                    ${ hasUserAnswered ?
                      'placeholder:font-semibold placeholder:text-[#7D7D7D]' :
                      'placeholder:font-light placeholder:text-[#777777]'}
                    `}
                    placeholder={ hasUserAnswered ?
                      right_answer :
                      "Formato da resposta: "
                    }
                    {...register(`question: ${id}`)}
                    onChange={(e)=> hideResponseFormat(e, id)}
                  />

                  <Format
                    idInput={id}
                    focusedInputId={focusedInputId}
                    format={format}
                    hasUserAnswered={hasUserAnswered}
                  />
                </div>

                <Buttons
                  hasUserAnswered={hasUserAnswered}
                  hint={hint}
                  openTipModal={()=> openTipModal(hint)}
                />
            </div>
            </div>
          ))}
        </form>

      </div>
    </div>
  )
}


export default Quiz
