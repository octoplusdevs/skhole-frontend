import { Wrapper } from "./style";
import {LockSimple} from 'phosphor-react'
import { forwardRef, useState } from "react";
import { Eye, EyeClosed} from 'phosphor-react'





export const InputPassword = forwardRef(({
    className,
    color,
    ...rest
},ref)=>{
    const [inputType, setInputType] = useState('password')

    function toggleTypeInput(){
    setInputType(
        inputType === 'password' ?
        'text' : 'password'
    )
}

    return(
        <>
            <label htmlFor="password">Senha</label>
            <Wrapper className={className}>
                <div className="icon">
                     <LockSimple size={30} color={color}/>
                </div>
                <input 
                    type={inputType} 
                    ref={ref}
                    id="password"
                    {...rest}
                />
                <div className="Eye" onClick={toggleTypeInput}>
                    {
                        inputType === 'password' ?
                        <EyeClosed size={30} color='#323232'/> : <Eye size={30} color='#47FDBB'/>
                    }
                </div>
            </Wrapper>
        </>
    )
})


