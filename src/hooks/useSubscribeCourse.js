import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";
import { toast } from "react-toastify";

const createEnrollment = async (course_id) => {
  try {
    const { data: response } = await API.post("/enrollments", {
      course_id,
    });
    return response.data;
  } catch (err) {
    toast.error("Não foi possível inscrever");
    //
  }
};

const destroyEnrollment = async (options) => {
  const { id, course_id } = options;
  const { data: response } = await API.put("/enrollments/" + id, {
    course_id,
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
