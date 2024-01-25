import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Lightning, PaperPlane, Lightbulb } from "phosphor-react"
import { useState } from 'react'

function QuestionArea({
  points,
  question_text,
  hasUserAnswered,
  hint,
  format,
  right_answer,
  onClick,
  ...rest
}){
  const [focusInput, setFocusInput] = useState()

  const hideResponseFormat = (e) => {
    const currentTextSize = e.currentTarget.value.length

    if(currentTextSize > 0){
      return setFocusInput(true)
    }
   setFocusInput(false)
  }

  return(
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 w-max p-3 bg-[#262626] rounded-[6px]">
        <span className="text-white text-[18px] font-medium ">
          + { points }
        </span>
        <Lightning size={24} color="#69DB7C" />
      </div>

      <p className="text-white text-[18px] font-medium">{ question_text }</p>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
        <div
          className="flex w-full h-max rounded-[4px] border
          border-[#303030] relative"
        >
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
            onChange={(e)=> hideResponseFormat(e)}
          />

          <span
            className={`text-white font-semibold absolute left-[212px] top-[14px]
            ${ focusInput || hasUserAnswered ? 'hidden': 'flex' }`}
          >
            { format }
          </span>
        </div>

      <div className="flex gap-4 w-full max-w-[348px] sm:max-w-[248px]">
        <Button
          className={`flex w-full border-none items-center rounded-[4px] text-2xl
          text-white gap-2 h-[56px] hover:bg-[#845ef7ee]
            ${ hasUserAnswered ?
              'bg-[#A688FF] pointer-events-none' :
              'bg-[#845EF7] pointer-events-auto' }
            `}
        >
          <PaperPlane
            size={24}
            color="#fff"
            className={`rotate-45 translate-y-[-4px] ${ hasUserAnswered ? 'hidden': 'flex'}`}
          />
          { hasUserAnswered ? 'Respondido' : 'Enviar'}
        </Button>

       { hint.length != 0 && (
        <Button
          type="button"
          onClick={onClick}
          className={`flex w-full max-w-[111px] rounded-[4px] items-center border border-[#FDB447]
            gap-2 text-2xl text-[#FDB447] hover:bg-[#fdb44731] justify-center h-[57px]
            ${ hasUserAnswered ?
               'pointer-events-none' :
               'pointer-events-auto' }
            `}
         >
          <Lightbulb size={24} color="#FDB447"/>
          Dica
        </Button>
       )}
      </div>
    </div>
  </div>
  )
}


export default QuestionArea
