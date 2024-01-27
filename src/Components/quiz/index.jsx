import { QUESTIONS } from "./data"
import ModalQuiz from "./modal"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Points } from "./points"
import Question from "./question"
import { ButtonsActions } from "./buttons-actions"
import { Format } from "./format"

function Quiz(){
  const [currentHint, setCurrenHint] = useState('')
  const [activateModal, setActivateModal] = useState(false)
  const [focusedInputId, setFocusedInputId] = useState(100)
  const [emptyEntryId, setEmptyEntryId] = useState(100)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
    watch,
    formState: { errors },
  } = useForm()

  const hideResponseFormat = (e, id) => {
    const currentTextSize = e.currentTarget.value.length

    if(currentTextSize > 0){
      return setFocusedInputId(id)
    }
    setFocusedInputId(100)
  }

  const openTipModal = (hint) => {
    setActivateModal(true)
    setCurrenHint(hint)
  }

  const closeTipModal = () => {
    setActivateModal(false)
  }

  const onSubmit = (data) => {
    const dataArray = Object.entries(data)
      .map(([questionId, response]) => ({ questionId, response }));

    let validQuestions = dataArray
      .filter(({ response }) => response !== "" && response !== undefined);

    const { questionId, response } = validQuestions[0];

    const questionAnswered = { questionId, response };

    console.log(questionAnswered)
    setFocusedInputId(100)
    setEmptyEntryId(100)
  }

  const resetInputs = () => {
    let redefinedFields = {}

    QUESTIONS.forEach(({ id }) => redefinedFields[id] = '');
    reset(redefinedFields);
  };

  useEffect(()=>{
    resetInputs()
  }, [isSubmitSuccessful])

  return(
    <div className="container">
      <div className="sm:bg-[#161817] flex flex-col gap-8 max-w-[800px] px-[12px] sm:px-[32px] py-[40px] rounded-[5px]">
        <header>
          <h2 className="text-white text-[20px] font-bold">
            Responda as questões abaixo
          </h2>
          <p className="text-[#969696] text-[15px] font-normal">
            Responda às perguntas abaixo para completar esta seção e ganhar pontos!
          </p>
        </header>

        <ModalQuiz
          onClick={closeTipModal}
          visible={activateModal}
          hint={currentHint}
        />

        <div className="flex flex-col gap-[40px]">
          {QUESTIONS.map(({
            id,
            format,
            hasUserAnswered,
            hint,
            points,
            question_text,
            right_answer })=>(
            <form
              key={id}
              onSubmit={focusedInputId === id ?
                handleSubmit(onSubmit) :
                handleSubmit(()=> setEmptyEntryId(id))
              }
              className="flex flex-col gap-[8px] w-full"
            >
              <Points points={points}/>
              <Question question_text={question_text}/>
              <div className="flex flex-col sm:flex-row sm:gap-[8px] gap-[16px]">
                <div
                  className={`flex w-full flex-initial items-center h-max rounded-[4px] border relative overflow-hidden
                    ${ emptyEntryId === id ?
                      'border-[#845EF7]' :
                      'border-[#303030]'
                    }
                  `}
                >
                  <Input
                    disabled={ hasUserAnswered ? true : false }
                    className={`font-semibold text-[18px] text-[#7D7D7D] border-none py-[24px] pl-[16px] w-full
                    ${ hasUserAnswered ?
                      'placeholder:font-semibold placeholder:text-[#7D7D7D]' :
                      'placeholder:font-light placeholder:text-[#777777]'}
                    `}
                    placeholder={ hasUserAnswered ?
                      right_answer :
                      "Formato da resposta: "
                    }
                    {...register(`${id}`)}
                    onChange={(e)=> hideResponseFormat(e, id)}
                  />

                  <Format
                    idInput={id}
                    focusedInputId={focusedInputId}
                    format={format}
                    hasUserAnswered={hasUserAnswered}
                  />
                </div>

                <ButtonsActions
                  hasUserAnswered={hasUserAnswered}
                  hint={hint}
                  openTipModal={()=> openTipModal(hint)}
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
