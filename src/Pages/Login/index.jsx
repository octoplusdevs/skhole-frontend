import { Wrapper } from "./style";
import { Title } from "../../Components/Title";
import { NewPass } from "../../Components/NewPass";


export function Login(){
    return(
        <Wrapper>
           <div className="container">
            <Title
                h3="Skholê"
                h1="Faça o login para continuar na plataforma"
                p="© 2022 Skholê. Powered by Octoplus"
                />        
                <NewPass />        
           </div>
        </Wrapper>
    )
}