import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { ArrowLeft } from "phosphor-react";

export default function NotFound() {
  return (
    <Wrapper>
      <div className="left">
        <h1>
          4<span>0</span>4
        </h1>
        <p>Ops, parece que esta página não existe!</p>
        <Link to={"/"}>
          <ArrowLeft size={32} />
          Voltar ao Skholê
        </Link>
      </div>
      <div className="right">
        <img src="/404.svg" />
      </div>
    </Wrapper>
  );
}
