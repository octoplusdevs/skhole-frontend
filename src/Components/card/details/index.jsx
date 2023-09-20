import { Wrapper } from "./styles";
import Detail from "./detail";
import { formatSecondsToHMS } from "../../../utils";
import { Clock, FileVideo, Star } from "phosphor-react";

export default function Details({ totalLessons = 120, rate = 5, totalDuration = 120 }) {
  return (
    <Wrapper>
      <Detail text={`${formatSecondsToHMS(totalDuration)}`} icon={<Clock size={24} />} />
      <Detail text={`${totalLessons} aulas`} icon={<FileVideo size={24} />} />
      <Detail text={`${rate}`} icon={<Star size={24} color="#FDB447" weight="fill" />} />
    </Wrapper>
  );
}
