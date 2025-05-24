import { IQuestion } from "./interface"

const Question = ({ question_text }: IQuestion) => {
  return (
    <p className="text-white text-[14px] sm:text-[16px] font-normal">
      {question_text}
    </p>
  )
}

export { Question }
