import React from "react";
import { Wrapper } from "./styles";
import { Check } from "phosphor-react";

function CircularProgress({ progress }) {
  return (
    <Wrapper progress={progress} className={`${progress >= 100 ? "completed" : ""}`}>
      {progress >= 100 ? (
        <Check color={`#fff`} size={18} weight="bold" />
      ) : (
        progress
      )}
    </Wrapper>
  );
}

export default CircularProgress;
