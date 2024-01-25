import { Lightbulb, X } from "phosphor-react"
import { Button } from "../ui/button"

function ModalQuiz({
  visible,
  hint,
  onClick,
  ...rest}){
  return(
    <div
      className={`w-full duration-300 px-10 bg-[#0f0e0eb2] fixed flex justify-center
      items-center top-0 z-[1000] h-screen left-0
      ${visible ?
        'opacity-100 pointer-events-auto':
        'opacity-0 pointer-events-none'}`
      }
    >
      <div className="bg-[#161817] border border-[#69DB7C] rounded-xl w-full max-w-[609px]
        h-[294px] relative flex justify-center items-center p-12">
        <Button
          onClick={onClick}
          className={`absolute top-8 right-[12px] hover:opacity-60`}
        >
          <X size={24} color="#fff"/>
        </Button>
        <div className="flex flex-col gap-4">
          <header className="flex gap-2 items-center">
            <Lightbulb size={40} color="#FDB447" className="size-12 sm:size-14 lg:size-16"/>
            <h2 className="text-[24px] lg:text-[32px] font-medium text-white">
              Dica de pergunta
            </h2>
          </header>
          <p className="text-[16px] sm:text-[18px] font-normal leading-[150%] text-white">
            {hint}
          </p>
        </div>
      </div>
    </div>
  )
}


export default ModalQuiz
