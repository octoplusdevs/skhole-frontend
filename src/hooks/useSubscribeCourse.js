import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";

const useEnrollment = (isUpdate = false) => {
  const createEnrollment = async (slug_course) => {
    const { data: response } = await API.post("/enrollments", {
      slug_course,
    });
    return response.data;
  };

  const destroyEnrollment = async (options) => {
    const { id, slug_course } = options;
    const { data: response } = await API.put("/enrollments/" + id, {
      slug_course,
      status: "canceled",
    });
    return response.data;
  };

  const mutation = useMutation(isUpdate ? destroyEnrollment : createEnrollment, {
    // onError: (error) => {
    //   //   alert("there was an error");
    //   //   console.log(error);
    // },
    onSuccess: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  return mutation;
};

export default useEnrollment;
