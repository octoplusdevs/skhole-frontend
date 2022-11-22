import { Wrapper } from "./style";
import { Title } from "../../Components/Title";
import CreateAnAcount from "../../Components/CreateAccount";


export function Register(){
    return(
        <Wrapper>
           <div className="container">
            <Title
                h3="Skholê"
                h1="Crie uma conta grátis na nossa plataforma"
                p="© 2022 Skholê. Powered by Octoplus"
                />
                <CreateAnAcount />
           </div>
        </Wrapper>
    )
}