import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

export function useVideo(slug_course, slug_module, slug_video) {
  return useQuery(["video", slug_course, slug_module, slug_video], async () => {
    if (!slug_course) return {};

    const response = await API.get(`/modules/course/${slug_course}`);
    let video = {};
    if (!slug_module && !slug_video) {
      const firstModule = response.data[0];
      video = firstModule?.videos[0];
    } else if (slug_module) {
      const module = response.data?.find((m) => m.slug === slug_module);
      // console.log("-> ***", module);

      if (!slug_video) {
        video = module?.videos[0];
      } else {
        video = module?.videos?.find((v) => v.slug === slug_video);
      }
    }
    return video || {};
  });
}
