import { Wrapper } from "./style";

export default function Card({ title, duration, thumbnail, description, ...rest }) {
  return (
    <Wrapper {...rest}>
      <div className="card">
        <img src={thumbnail} alt={description} />
      </div>
      <div className="text">
        <h4>{title}</h4>
        <span>{duration} horas</span>
      </div>
    </Wrapper>
  );
}
