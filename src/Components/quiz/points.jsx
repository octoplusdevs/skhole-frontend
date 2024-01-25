import { Lightning } from "phosphor-react"

export function Points({ points }){
  return(
    <div className="flex gap-4 w-max p-3 bg-[#262626] rounded-[6px]">
      <span className="text-white text-[18px] font-medium ">
        + { points }
      </span>
      <Lightning size={24} color="#69DB7C" />
    </div>
  )
}
