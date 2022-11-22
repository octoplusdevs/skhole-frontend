import { Route, Routes} from "react-router-dom";
import { Discover } from "../Pages/Discover";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Watching } from "../Pages/Watching";
import { NotFound } from "../Pages/NotFound";


export default function(){
    return(
        <Routes>
            <Route path="/" element={<Discover />}/>
            <Route path="/Watching" element={<Watching />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path='/*' element ={<NotFound />}/>
        </Routes>
    )
}