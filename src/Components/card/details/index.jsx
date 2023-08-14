import { Wrapper } from "./styles";
import Detail from "./detail";
import { formatSecondsToHMS } from "../../../utils";
import { Clock, FileVideo, Star } from "phosphor-react";

export default function Details() {
  return (
    <Wrapper>
      <Detail text={`${formatSecondsToHMS(1200)}`} icon={<Clock size={24} />} />
      <Detail text={"45 aulas"} icon={<FileVideo size={24} />} />
      <Detail text={"4.8"} icon={<Star size={24} color="#FDB447" weight="fill" />} />
    </Wrapper>
  );
}
