import  {Wrapper} from './style'



export function Title({
    h3,
    h1,
    p,
}){
    return(
        <Wrapper>
            <h3>{h3}</h3>
            <h1>{h1}</h1>
            <p>{p}</p>
        </Wrapper>
    )
}