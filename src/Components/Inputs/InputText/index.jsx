import { Wrapper } from "./style";
import {User} from 'phosphor-react'
import { ref } from "yup";
import { forwardRef } from "react";

export const InputText = forwardRef(({
    className,
    color,
    ...rest
},ref)=>(
   <>
     <label htmlFor="text">Nome Completo</label>
        <Wrapper className={className}>
            <div className="icon">
                <User size={30} color={color}/>
            </div>
            <input 
                type="text"
                id="text" 
                ref={ref} 
                {...rest}/> 
        </Wrapper>
   </>
))
