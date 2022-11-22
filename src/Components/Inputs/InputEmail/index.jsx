import { Wrapper } from "./style";
import {EnvelopeSimple} from 'phosphor-react'
import { forwardRef } from "react";


export const InputEmail = forwardRef(({
    className,
    color,
    ...rest
},ref)=>(
    <>
        <label htmlFor="email">E-mail</label>
        <Wrapper className={className}>
            <div className="icon">
                 <EnvelopeSimple size={30} color={color}/>
            </div>
            <input 
                type="email"  
                id="email" 
                ref={ref}
                {...rest}
                disabled={false}
                />
        </Wrapper>
    </>
))


