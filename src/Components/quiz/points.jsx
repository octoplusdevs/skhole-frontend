import { Lightning } from "phosphor-react"

export function Points({ points }){
  return(
    <div className="flex gap-2 w-max p-3 py-4 bg-[#262626] rounded-[6px] items-center">
      <span className="text-white text-[16px] sm:text-[16px] font-medium ">
        +{ points }
      </span>
      <Lightning className="text-[16px] sm:text-[22px]" color="#69DB7C" />
    </div>
  )
}
