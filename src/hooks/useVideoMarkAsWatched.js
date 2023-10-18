import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
// import { queryClient } from "../services/query";

async function markAsWatched({ slug_course, slug_video }) {
  let response, video;
  response = await API.post(`/videos/${slug_course}/${slug_video}/mark-viewed`);
  video = response.data;

  return video;
}

export function useVideoMarkAsWatched() {
  return useMutation(["video"], markAsWatched, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries("video");
    // },
  });
}
