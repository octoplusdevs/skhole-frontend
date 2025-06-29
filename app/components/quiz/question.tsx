import { IQuestion } from "./interface"

const Question = ({ question_text }: IQuestion) => {
  return (
    <p className="text-[#969696] text-[15px] font-normal">
      {question_text}
    </p>
  )
}

export { Question }
