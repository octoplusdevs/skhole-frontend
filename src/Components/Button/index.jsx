import { Wrapper } from "./style"
import { CircleNotch} from 'phosphor-react'

export function Button({
    className,
    Text,
    isLoading=false,
    Icon,
    ...rest
}){
    return(
        <Wrapper {...rest} className={className}>
            {
                isLoading === false? Text : <CircleNotch className="loading" size={13}/> 
            }
           {
                Icon && <img src={Icon} />
           }
        </Wrapper>
    )
}