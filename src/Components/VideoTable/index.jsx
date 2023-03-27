import { Wrapper } from "./style";
import playVideo from "../../assets/PlayVideo.svg";
import replayIcon from "../../assets/Vector.svg";
import Switch from "../Switch";


export default function VideoTable({
  description,
  title,
  duration
}){
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
                        <span>{duration}</span>
                        {title}
                    </h4>
                    <h5>
                      {description}
                    </h5>
                </div>
            </Wrapper>
        </>
    )
}
