import { formatTime } from "@/utils/format-time"
import { ILessonProgress } from "./interface"

const LessonProgress = ({ percentage, progressColor, title, lessons }: ILessonProgress) => {
  const formattedTime = formatTime(
    lessons.reduce((prev: number, curr: any) => prev + curr.duration, 0)
  )
  return (
    <div className="flex gap-4 w-full">
      <div
        className="relative w-full max-w-[48px] h-[48px] rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(${progressColor} 0% ${percentage}%, #e5e7eb86 ${percentage}% 100%)`
        }}
      >
        <span className="absolute text-sm text-white bg-[#182132] rounded-full text-[12px] font-bold w-full max-w-[42px] h-[42px] flex items-center justify-center">
          {percentage}%
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-[16px]">{title}</h4>
        <p className="text-[14px] text-link">
          {lessons.length} Aulas -{" "}
          {formattedTime}{" "}
          {formattedTime.length > 5 ? 'Horas' : 'Minutos'}
        </p>
      </div>
    </div>

  )
}

export { LessonProgress }
