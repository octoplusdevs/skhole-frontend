import { Lightning } from "phosphor-react";
import React from "react";
import { useUserInformation } from "../../hooks/useUserInformation";
import Cookies from "js-cookie";

function UserPoints() {
  const { data: userInfo } = useUserInformation(Cookies.get("skhole.user.id"));


  return (
    <div
      className="bg-[#333A3D] select-none pointer-events-none flex gap-2 items-center justify-center px-4 py-3 h-max rounded-[6px]"
    >
      <span className="text-white text-[18px] font-medium sm:text-[20px]">
        {userInfo?.points}
      </span>
      {
        userInfo?.points <= 0 ? (
          <Lightning color="#db6969" className="" size={24} weight="fill"/>
        ):
        (
          <Lightning color="#69DB7C" className="animate-pulse" size={24} weight="fill"/>
        )
      }
    </div>
  );
}

export default UserPoints;
