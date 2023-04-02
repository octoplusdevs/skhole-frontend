import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Wrapper } from "./style";
import Playlist from "../../Components/Playlist";
import VideoTable from "../../Components/VideoTable";
import { useModules } from "../../hooks/useModules";
import { useVideo } from "../../hooks/useVideo";

export function Watch() {
  const { slug_course, slug_video, slug_module } = useParams();
  const { data: video, isLoading: isLoadingVideo } = useVideo(slug_course, slug_module, slug_video);
  const { data: modules } = useModules(slug_course);

  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <VideoTable
            title={video?.title}
            description={video?.description}
            duration={video?.duration}
            url={video?.url}
            videoIdCDN={video?.videoIdCDN}
            isLoading={isLoadingVideo}
          />
          <Playlist modules={modules} slug_course={slug_course} activeVideo={video?.id} />
        </div>
      </Wrapper>
    </>
  );
}
