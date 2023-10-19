import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
// import { queryClient } from "../services/query";

async function markAsWatched({ video_id }) {
  let response, video;
  response = await API.post(`/videos/mark-viewed`, {
    video_id,
  });
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
