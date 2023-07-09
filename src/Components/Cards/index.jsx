import { Clock, FileVideo, Star } from "phosphor-react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";

export default function Card({
  title,
  duration,
  thumbnail,
  price = 2,
  subscribed,
  confirmed,
  description,
  slug,
  rate = 4.4,
  handleEnroll,
  ...rest
}) {
  return (
    <Wrapper {...rest}>
      <div className="card__thumbnail">
        {confirmed && subscribed ? (
          <Link to={`/courses/watch/${slug}`}>
            <img src={thumbnail} alt={description} />
          </Link>
        ) : (
          <img src={thumbnail} alt={description} />
        )}
      </div>
      <div className="card__info">
        <h3 className="card__title">
          {confirmed && subscribed ? <Link to={`/courses/watch/${slug}`}>{title}</Link> : title}
        </h3>
        <p className="card__price">
          {price > 0 ? "Por apenas " : ""}
          <span className="price">{price > 0 ? `${price}mil kz` : "Gratuito"}</span>
        </p>
      </div>
      <div className="card__details">
        <span className="card__details-time">
          <Clock size={24} />
          {duration}h
        </span>
        <span className="card__details-lessons">
          <FileVideo size={24} />
          45 aulas
        </span>
        <span className="card__details-rating">
          <Star size={24} color="#FDB447" weight="fill" />
          {rate}
        </span>
      </div>
      {subscribed && confirmed ? (
        <>
          <Link
            className={subscribed ? "card__button subscribed" : "card__button"}
            to={`/courses/watch/${slug}`}
          >
            Assistir
          </Link>
        </>
      ) : subscribed ? (
        <button className="card__button noverify">Em verificação</button>
      ) : (
        <button onClick={() => handleEnroll(slug)} className={"card__button"}>
          Inscrever
        </button>
      )}
    </Wrapper>
  );
}
