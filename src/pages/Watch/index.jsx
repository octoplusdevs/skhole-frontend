import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
import Playlist from "../../Components/Playlist";
import { Player } from "../../Components/Player";
import { useModules } from "../../hooks/useModules";
import { useVideo } from "../../hooks/useVideo";
import { DownloadSimple, Link, Student } from "phosphor-react";
import Quiz from "../../Components/quiz";
import { QUESTIONS } from "@/Components/quiz/data";

export default function Watch() {
  const { slug_course, slug_video, slug_module } = useParams();
  const { data: video, isLoading: isLoadingVideo } = useVideo(slug_course, slug_module, slug_video);

  // Obtenha todos os vídeos dos módulos
  //  const allVideos = modules.reduce((acc, module) => [...acc, ...module.videos], []);
  // console.log(video);
  return (
    <Wrapper className="flex flex-col gap-14">
      <div className="grid">
        <div className="main">
          <Player
            title={video?.title}
            description={video?.description}
            duration={video?.duration}
            url={video?.url}
            videoIdCDN={video?.videoIdCDN}
            video_id={video?.id}
            isLoading={isLoadingVideo}
            initialLastPosition={video?.progress?.lastPosition}
          />
          <div className={`${isLoadingVideo || video?.length <= 0 ? "skeleton" : "video__info"}`}>
            <h1>{video?.title}</h1>
            <p>{video?.description}</p>
          </div>
        </div>
        {/* <div className="playlist"> */}
        <aside className="aside">
          <Playlist
            // modules={modules}
            // slug_course={slug_course}
            activeVideo={slug_video || video?.slug}
          // status={status}
          />
          {video?.assetLink ?
            <a href={video.assetLink} target="_blank" rel="noopener noreferrer" className="button_assets">
              <Link size={24} weight="bold" />
              <span>
                Recursos da Aula
              </span>
            </a>
            :
            <span title="Ainda não disponível." className="button_assets disabled">
              <Link size={24} weight="regular" />
              <span>
                Recursos da Aula
              </span>
            </span>
          }
          <span title="Ainda não disponível." className="button_assets disabled">
            <Student size={24} weight="regular" />
            <span>
              Emitir Certificado
            </span>
          </span>


        </aside>
        {/* </div> */}
      </div>

      <Quiz QUESTIONS={video?.questions}/>
    </Wrapper>
  );
}
