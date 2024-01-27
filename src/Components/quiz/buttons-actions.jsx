import { Button } from "../ui/button"
import { PaperPlane, Lightbulb } from "phosphor-react"

export function ButtonsActions({
  hasUserAnswered,
  hint,
  openTipModal
}){
  return(
    <div className="flex gap-4 w-full sm:max-w-[248px]">
      <Button
        className={`flex w-full border-none items-center rounded-[4px] text-3xl sm:text-2xl
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
          onClick={openTipModal}
          className={`flex w-full sm:max-w-[111px] rounded-[4px] items-center border border-[#FDB447]
            gap-2 text-3xl sm:text-2xl text-[#FDB447] hover:bg-[#fdb44731] justify-center h-[57px]
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
  )
}
