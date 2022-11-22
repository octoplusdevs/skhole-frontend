import Playlist from "../../Components/Playlist";
import { Header } from "../../Components/Header";
import VideoTable from "../../Components/VideoTable";
import { Wrapper } from "./style";


export function Watching(){
    return(
        <>
        <Header />
        <Wrapper>
            <div className="container">
                <VideoTable />
                <Playlist />
            </div>
        </Wrapper>
        </>
    )
}