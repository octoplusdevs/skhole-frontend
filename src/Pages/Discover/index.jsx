import Card from "../../Components/Cards";
import { Header } from "../../Components/Header";
import { Wrapper } from "./style";

export function Discover() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <h4>Programação</h4>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
