import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";

async function markAsWatched(slug_video) {
  let response, video;
  response = await API.post(`/videos/${slug_video}/mark-viewed`);
  video = response.data;
  return video;
}

export function useVideoMarkAsWatched() {
  return useMutation(["video"], markAsWatched);
}
