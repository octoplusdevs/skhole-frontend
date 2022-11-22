import { Wrapper } from "./style";
import { Link } from "react-router-dom";


export default function Playlist(){
    return(
       <Wrapper>
            <div className="title">
                <h5>Playlist</h5>
                <span className="totalHour">34</span>
            </div>
            <div className="classes">
                <div className="classification">
                    <Link to={'/'} className="vizualizad">Introdução</Link>
                    <span>00:56</span>
                </div>
                <div className="classification">
                    <Link to={'/'} className="vizualizad">Usando o vite</Link>
                    <span>16:00</span>
                </div>
                <div className="classification">
                    <Link to={'/'} className="viewing">Conceitos de props</Link>
                    <span>42:11</span>
                </div>
                <div className="classification">
                    <Link to={'/'} className="unviewed">Conhecendo os hooks</Link>
                    <span>09:24</span>
                </div>
            </div>
       </Wrapper>
    )
}