import { Button } from "../ui/button"
import { PaperPlane, Lightbulb } from "phosphor-react"

export function ButtonsActions({
  hasUserAnswered,
  hint,
  openTipModal
}){
  return(
    <div className="flex gap-4 sm:w-fit w-full h-[50px]">
      <Button
        className={`flex w-full flex-shrink px-[32px] border-none items-center rounded-[4px] text-[16px]
        text-white gap-2 h-full hover:bg-[#845ef7ee]
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
          onClick={openTipModal}
          className={`flex w-fit rounded-[4px] items-center border border-[#FDB447]
            gap-2 text-[16px] px-[18px] text-[#FDB447] hover:bg-[#fdb44731] justify-center h-full
            `}
          >
          <Lightbulb size={24} color="#FDB447"/>
          Dica
        </Button>
      )}
    </div>
  )
}
