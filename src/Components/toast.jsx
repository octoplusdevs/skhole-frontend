import { Lightning } from "phosphor-react";

export function ToastModified ({points, message}) {
  return (
    <div className="flex py-4 items-center gap-[8px]">
      {
      points &&
        <span className="flex text-black items-center ">
        <b className="font-bold">+{points}pts</b>
        <Lightning className="text-[16px] sm:text-[18px]" weight="fill" color="#000" />
      </span>
      }

      <span className="font-bold">{message}</span>
    </div>
  )
}
