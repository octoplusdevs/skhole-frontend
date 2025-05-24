import { IFormat } from "./interface"

const Format = ({
  focusedInputId,
  hasUserAnswered,
  format,
  idInput
}: IFormat) => {
  return (
    <span
      className={`text-white font-semibold absolute left-[198px] lg:left-[200px] pointer-events-none
      ${idInput === focusedInputId || hasUserAnswered ? 'hidden' : 'flex'}`}
    >
      {format}
    </span>
  )
}

export { Format }
