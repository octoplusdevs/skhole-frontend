import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Wrapper } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputEmail } from "../Inputs/InputEmail";
import { InputPassword } from "../Inputs/InputPassword";
import { schemaLogin } from "../../Schemas/schemaLogin";
import { Link } from "react-router-dom";
import { useState } from "react";

export function NewPass(){
    const [isLoading, setIsLoading] = useState(false)
    const [clicked, setClicked] = useState(false)

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({resolver:yupResolver(schemaLogin)})
    
    function onSubmit(data){
        console.log(data)
        setIsLoading(!isLoading)
        setClicked(!clicked)
    }

    
    return(
        <>
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <InputEmail {...register ('email')}
                    placeholder="Seu endereço de email"
                    color={
                        errors.email && '#FD4747'
                       }
                    className={
                        errors.email && 'errorInput'
                    }
                    />

                    <InputPassword {...register('password')}
                    placeholder="Sua senha"
                    color={
                        errors.password && '#FD4747' 
                       }
                    className={
                        errors.password && 'errorInput'
                    }
                    />
                    
                   <Button 
                   Text="Entrar"
                   isLoading={isLoading}
                   Primary
                   className={
                        clicked === false ? '' : 'clicked'
                   }
                   
                    />
                    <div className="links">
                        <Link to={'/Login'}>Recuperar conta</Link>
                        <Link to={'/Register'}>Criar uma nova conta</Link>
                    </div>
                </form>
            </Wrapper>
        </>
    )
}
