import { Check } from "@phosphor-icons/react/dist/ssr/Check"
import { ICheckbox } from "./interface"
import { formatTime } from "@/utils/format-time"
import { CheckFat } from "@phosphor-icons/react/dist/ssr"

const CheckBox = ({ duration, onClick, title, watched, check }: ICheckbox) => {
  return (
    <div className="flex w-full justify-between gap-1 cursor-pointer hover:opacity-60 duration-100">
      <div className="flex gap-2 w-full">
        <div className="h-[24px] w-full max-w-[24px] rounded-[4px] flex items-center justify-center bg-[#ffffff39]" onClick={check}>
          {watched && <CheckFat color="#baf722" size={16} weight="fill" />}
          <input type="checkbox" className="appearance-none" />
        </div>
        <p onClick={onClick}>{title}</p>
      </div>
      <span className="text-link">{duration && formatTime(duration)}</span>
    </div>
  )
}

export { CheckBox }
