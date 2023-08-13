import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";
import { toast } from "react-toastify";

const createEnrollment = async (slug_course) => {
  try {
    const { data: response } = await API.post("/enrollments", {
      slug_course,
    });
    return response.data;
  } catch (err) {
    toast.error("Não foi possível inscrever");
    //
  }
};

const destroyEnrollment = async (options) => {
  const { id, slug_course } = options;
  const { data: response } = await API.put("/enrollments/" + id, {
    slug_course,
    status: "canceled",
  });
  return response.data;
};

const useEnrollment = (isUpdate = false) => {
  return useMutation(["courses"], isUpdate ? destroyEnrollment : createEnrollment, {
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });
};

export default useEnrollment;
