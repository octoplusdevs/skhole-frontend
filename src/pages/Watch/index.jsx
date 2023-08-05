import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
import Playlist from "../../Components/Playlist";
import { Player } from "../../Components/Player";
import { useModules } from "../../hooks/useModules";
import { useVideo } from "../../hooks/useVideo";

export function Watch() {
  const { slug_course, slug_video, slug_module } = useParams();
  const { data: video, isLoading: isLoadingVideo } = useVideo(slug_course, slug_module, slug_video);
  const { data: modules } = useModules(slug_course);

  return (
    <Wrapper>
      <div className="grid">
        <div className="main">
          <Player
            title={video?.title}
            description={video?.description}
            duration={video?.duration}
            url={video?.url}
            videoIdCDN={video?.videoIdCDN}
            isLoading={isLoadingVideo}
          />
          <div className={`${isLoadingVideo || video?.length <= 0 ? "skeleton" : "video__info"}`}>
            <h1>{video?.title}</h1>
            <p>{video?.description}</p>
          </div>
        </div>
        {/* <div className="playlist"> */}
        <Playlist
          modules={modules}
          slug_course={slug_course}
          activeVideo={slug_video || video?.slug}
        />
        {/* </div> */}
      </div>
    </Wrapper>
  );
}
