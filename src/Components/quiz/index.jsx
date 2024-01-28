import ModalQuiz from "./modal"
import { useState } from "react"
import { Input } from "../ui/input"
import { Points } from "./points"
import Question from "./question"
import { ButtonsActions } from "./buttons-actions"
import toast, { Toaster } from 'react-hot-toast';
import { Lightning } from "phosphor-react"



function ToastModified ({points, message}) {
  return (
    <div className="flex py-4 items-center gap-[8px]">
      {
      points &&
        <span className="flex text-black items-center ">
        <b className="font-bold">+{points}pts</b>
        <Lightning className="text-[16px] sm:text-[18px]" weight="fill" color="#000" />
      </span>
      }

      <span className="font-bold">{message}</span>
    </div>
  )
}

function Quiz({QUESTIONS}){
  const [currentHint, setCurrenHint] = useState('')
  const [activateModal, setActivateModal] = useState(false)

  const openTipModal = (hint) => {
    setActivateModal(true)
    setCurrenHint(hint)
  }

  const closeTipModal = () => {
    setActivateModal(false)
  }

  const handleSubmit = (e, formId, right_answer, points) => {
    e.preventDefault();
    try{
      // throw new Error("Erro")
      const flagValue = e.target.elements.flag.value;
      console.log({flagValue, questionId: formId, right_answer})
      toast((t) => <ToastModified points={4} message={'Uau! Acertou em cheio!'} />, {
        style: {
          borderRadius: '10px',
          background: '#C4FFBF',
          color: '#005134',
        },
      });

    }catch(e){
      toast((t) => <ToastModified message={'Epa! Quase acertou hein, continue!'} />, {
        style: {
          borderRadius: '10px',
          background: '#FFA4A4',
          color: '#511300',
        },
      });

    }

  };

  return(
    <div className="container">
      <div className="sm:bg-[#161817] flex flex-col gap-8 max-w-[800px] px-[12px] sm:px-[32px] py-[40px] rounded-[5px]">
        <header>
          <h2 className="text-white text-[20px] font-bold">
            Desafios da aula
          </h2>
          <p className="text-[#969696] text-[15px] font-normal">
            {
              QUESTIONS?.length > 0 ? 'Responda às perguntas abaixo para completar os desafios e ganhar pontos!':
              'Esta aula nao tem desafios!'
            }
          </p>
        </header>

        <ModalQuiz
          onClick={closeTipModal}
          visible={activateModal}
          hint={currentHint}
        />

        <div className="flex flex-col gap-[40px]">
          {QUESTIONS?.map(({
            id,
            format,
            hasUserAnswered,
            hint,
            points,
            question_text,
            flag })=>(
            <form
              key={id}
              onSubmit={(e) => handleSubmit(e, id)}
              className="flex flex-col gap-[8px] w-full"
            >
              <Points points={points}/>
              <Question question_text={question_text}/>
              <div className="flex flex-col sm:flex-row sm:gap-[8px] gap-[16px]">
                <div
                  className={`flex w-full flex-initial items-center h-max rounded-[4px] border relative
                  overflow-hidden border-[#303030] focus-within:border-[#868e96]
                  `}
                >
                  <Input
                    disabled={ hasUserAnswered ? true : false }
                    className={`font-semibold text-[18px] text-[#fff] border-none py-[24px] pl-[16px] w-full
                    ${ hasUserAnswered ?
                      'placeholder:font-semibold placeholder:text-[#7D7D7D]' :
                      'placeholder:font-light placeholder:text-[#777777]'}
                    `}
                    placeholder={ hasUserAnswered ?
                      flag :
                      `Formato da resposta: ${format}`
                    }
                    name="flag"
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
      <Toaster
        position="bottom-right"

      />
    </div>
  )
}


export default Quiz
