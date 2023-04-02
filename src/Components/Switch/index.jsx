import { Wrapper } from "./style";

export default function Switch({}) {
  return (
    <>
      <Wrapper>
        <span>Autoplay</span>
        <div className="switch">
          <input type="checkbox" />
        </div>
      </Wrapper>
    </>
  );
}
