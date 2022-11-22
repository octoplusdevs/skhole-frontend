import { Wrapper } from "./style";
import playVideo from "../../assets/PlayVideo.svg";
import replayIcon from "../../assets/Vector.svg";
import Switch from "../Switch";


export default function VideoTable(){
    return(
        <>
            <Wrapper>
                <div className="video-played">
                    <div className="video">
                        <img src={playVideo}/>
                    </div>
                    <div className="reproduction">
                        <div className="icon-playback">
                            <img src={replayIcon}/>
                        </div>  
                        <div className="switch">
                            <Switch />
                        </div>
                    </div>
                    </div>
                <div className="text">
                    <h4>
                        <span>4</span> Introdução a modelagem de dados no modelo relacional usando o Brmodelo
                    </h4>
                    <h5>
                        DogeCoin buying growth hacker. MVP finishing tech-bro. Alexis Ohanian-tweeted overhyped ed-Tech series D. Generalist-reading secondary markets buyer. Hypergrowth activist investor.
                    </h5>
                </div>
            </Wrapper>
        </>
    )
}