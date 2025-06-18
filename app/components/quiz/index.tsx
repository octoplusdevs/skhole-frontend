import { ModalQuiz } from "./modal"
import { useState } from "react"
import { Input } from "../ui/input"
import { Points } from "./points"
import { Question } from "./question"
import { ButtonsActions } from "./buttons-actions"
// import useAnswerQuestion from "@/hooks/useAnswerQuestion"

function Quiz({ QUESTIONS }: { QUESTIONS: any[] }) {
  const [currentTip, setCurrentTip] = useState('')
  const [activateModal, setActivateModal] = useState(false)
  const [selectQuestionId, setSelectQuestionId] = useState("")
  // const { mutate, isLoading } = useAnswerQuestion();
  const openTipModal = (hint: string) => {
    setActivateModal(true)
    setCurrentTip(hint)
  }

  const closeTipModal = () => {
    setActivateModal(false)
  }

  const handleSubmit = async (e: any, question_id: string) => {
    e.preventDefault();
    let user_response = e.target.elements.flag.value;
    setSelectQuestionId(question_id)
    // mutate({
    //   question_id,
    //   user_response: user_response.toLowerCase()
    // });
  };

  return (
    <div className="container">
      <div className="sm:bg-secondary flex flex-col gap-8 w-full  max-w-[800px] px-[12px] sm:px-[32px] py-[40px] rounded-[5px]">
        <header>
          <h2 className="text-white text-[20px] font-bold">
            Desafios da aula
          </h2>
          <p className="text-[#969696] text-[15px] font-normal">
            {
              QUESTIONS?.length > 0 ? 'Responda às perguntas abaixo para completar os desafios e ganhar pontos!' :
                'Esta aula nao tem desafios!'
            }
          </p>
        </header>

        <ModalQuiz
          onClick={closeTipModal}
          visible={activateModal}
          hint={currentTip}
        />

        <div className="flex flex-col gap-[40px] w-full max-w-[800px]">
          {QUESTIONS?.map(({
            id,
            is_bonus,
            responseFormat,
            tip,
            points,
            question,
            correctAnswer,
            isCorrect
          }) => (
            <form
              key={id}
              onSubmit={(e) => handleSubmit(e, id)}
              className="flex flex-col gap-[8px] w-full"
            >
              <Points points={points} />
              <Question question_text={question} />
              <div className="flex flex-col sm:flex-row sm:gap-[8px] gap-[16px]">
                <div
                  className={`flex w-full flex-initial items-center h-max rounded-[4px] border relative
                  overflow-hidden border-[#303030] focus-within:border-[#868e96]
                  `}
                >
                  <Input
                    disabled={isCorrect || is_bonus}
                    className={`font-semibold text-[18px] text-[#fff] border-none py-[24px] pl-[16px] w-full
                    ${isCorrect ?
                        'placeholder:font-semibold placeholder:text-[#7D7D7D]' :
                        'placeholder:font-light placeholder:text-[#777777]'}
                    `}
                    placeholder={(isCorrect || is_bonus) === true ?
                      correctAnswer :
                      `Formato da resposta: ${responseFormat}`
                    }
                    name="flag"
                  />
                </div>
                <ButtonsActions
                  isLoading={
                    selectQuestionId === id && true
                  }
                  hasUserAnswered={isCorrect}
                  hint={tip}
                  openTipModal={() => openTipModal(tip)}
                />
              </div>
            </form>
          ))}
        </div>

      </div>

    </div>
  )
}


export default Quiz
