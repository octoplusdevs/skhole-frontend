import React from "react";
import { Oval } from "react-loader-spinner";
import { Wrapper } from "./styles";

function Loader() {
  return (
    <Wrapper>
      <Oval
        height={80}
        width={80}
        color="#47fdbb"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#47fdbb"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Wrapper>
  );
}

export default Loader;
