import { LightningSlash } from "phosphor-react";
import React from "react";
import { useUserInformation } from "../../hooks/useUserInformation";
import Cookies from "js-cookie";

function UserPoints() {
  const { data: userInfo } = useUserInformation(Cookies.get("skhole.user.id"));

  return (
    <div className="text-red-500">
      <LightningSlash color="red" />
      {userInfo?.points}
    </div>
  );
}

export default UserPoints;
