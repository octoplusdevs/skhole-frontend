import { Wrapper } from "./style";


export default function Card(){
    return(
        <>
            <Wrapper>
                <div className="card">
                </div>
                <div className="text">
                    <h4>Curso de React JS</h4>
                    <span>Duração 40h</span>
                </div>
            </Wrapper>
        </>
    )
}