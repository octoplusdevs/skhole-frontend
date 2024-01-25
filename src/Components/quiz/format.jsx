export function Format({
  focusedInputId,
  hasUserAnswered,
  format,
  idInput
}){
  return(
    <span
    className={`text-white font-semibold absolute left-[212px] top-[14px]
      ${ idInput === focusedInputId || hasUserAnswered ? 'hidden': 'flex' }`}
    >
      { format }
    </span>
  )
}
