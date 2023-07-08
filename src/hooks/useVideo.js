import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

export function useVideo(slug_course, slug_module, slug_video) {
  return useQuery(["video", slug_course, slug_module, slug_video], async () => {
    let response, video;

    if (slug_course) {
      if (!slug_module && !slug_video) {
        response = await API.get(`/modules/course/${slug_course}`);
        const firstModule = response.data[0];
        video = firstModule?.videos[0];
      } else if (slug_module && !slug_video) {
        response = await API.get(`/modules/course/${slug_course}/module/${slug_module}`);
        video = response.data?.videos[0];
      } else if (slug_module && slug_video) {
        response = await API.get(`/modules/course/${slug_course}/module/${slug_module}`);
        video = response.data?.videos?.find((v) => v.slug === slug_video);
      }
    }

    return video;
  });
}
