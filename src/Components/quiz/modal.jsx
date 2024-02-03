import { Lightbulb, X } from "phosphor-react"
import { Button } from "../ui/button"

function ModalQuiz({
  visible,
  hint,
  onClick,
  ...rest
}){
  return(
    <div
      className={`w-full duration-300 px-10 bg-[#0f0e0eb2] fixed flex justify-center
      items-center top-0 z-[1000] h-screen left-0
      ${visible ?
        'opacity-100 pointer-events-auto':
        'opacity-0 pointer-events-none'}`
      }
      {...rest}
    >
      <div className="bg-[#161817] border border-[#acabab62] rounded-xl
          py-3 w-full max-h-[320px] max-w-[380px]
          relative flex justify-center items-center px-12">
        <Button
          onClick={onClick}
          className={`absolute top-[12px] right-[4px] hover:opacity-60`}
        >
          <X size={24} color="#fff"/>
        </Button>
        <div className="flex flex-col gap-3 py-12 w-full h-full">
          <header className="flex gap-2 items-center">
            <Lightbulb size={40} color="#FDB447" className="size-12 sm:size-14 lg:size-16"/>
            <h2 className="text-[22px] lg:text-[24px] font-medium text-white">
              Dica de pergunta
            </h2>
          </header>
          <p className="text-[14px] sm:text-[16px] font-normal leading-[150%] text-[#bebebe]">
            {hint}
          </p>
        </div>
      </div>
    </div>
  )
}


export default ModalQuiz
