import { Lightning } from "@phosphor-icons/react/dist/ssr"
import { IPoints } from "./interface"

const Points = ({ points }: IPoints) => {
  return (
    <div className="flex gap-2 w-max p-3 py-4 bg-background rounded-[6px] items-center">
      <span className="text-white text-[16px] sm:text-[16px] font-medium ">
        +{points}pts
      </span>
      <Lightning className="text-[16px] sm:text-[22px]" color="#baf722" />
    </div>
  )
}

export { Points }
