import { useMutation } from "react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";

const useEnrollment = (isUpdate = false) => {
  const createEnrollment = async (data) => {
    const { data: response } = await API.post("/enrollments", data);
    return response.data;
  };

  const destroyEnrollment = async (data) => {
    const { data: response } = await API.delete("/enrollments", data);
    return response.data;
  };

  const mutation = useMutation(isUpdate ? destroyEnrollment : createEnrollment, {
    // onSuccess: (data) => {
    //   //   console.log(data);
    // },
    // onError: (error) => {
    //   //   alert("there was an error");
    //   //   console.log(error);
    // },
    onSettled: () => {
      queryClient.invalidateQueries("courses");
    },
  });

  return mutation;
};

export default useEnrollment;
