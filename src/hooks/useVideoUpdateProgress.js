import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";

// async function updateProgress({ slug_course, slug_video }) {
//   let response, video;
//   response = await API.post(`/videos/${slug_course}/${slug_video}/update-progress`);
//   video = response.data;

//   return video;
// }

export function useVideoUpdateProgress() {
  return useMutation(
    ["video"],
    async ({ timeSpent, lastPosition, video_id }) => {
      let response, video;
      response = await API.put(`/videos/update-progress`, {
        timeSpent,
        lastPosition,
        video_id,
      });
      video = response.data;
      return video;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("video");
      },
    },
  );
}
