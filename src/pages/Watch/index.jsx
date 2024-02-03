import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
import Player from "../../Components/Player";
import { useVideo } from "../../hooks/useVideo";
import { Link, Student } from "@phosphor-icons/react";
import {SkeletonQuiz} from "../../Components/quiz"
import {SkeletonPlaylist} from "../../Components/Playlist"

const Playlist = lazy(() => import("../../Components/Playlist"))
const Quiz = lazy(() => import("../../Components/quiz"))

export default function Watch() {
  const [shouldShowFallback, setShouldShowFallback] = useState(true);
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
        <aside className="aside">
          <Suspense fallback={<SkeletonPlaylist />}>
            <Playlist
              activeVideo={slug_video || video?.slug}
            />
          </Suspense>
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
      </div>

      <Suspense fallback={<SkeletonQuiz/>}>
        <Quiz QUESTIONS={video?.questions}/>
      </Suspense>
    </Wrapper>
  );
}
