export function Format({
  focusedInputId,
  hasUserAnswered,
  format,
  idInput
}){
  return(
    <span
    className={`text-white font-semibold absolute left-[198px] lg:left-[200px] pointer-events-none
      ${ idInput === focusedInputId || hasUserAnswered ? 'hidden': 'flex' }`}
    >
      { format }
    </span>
  )
}
