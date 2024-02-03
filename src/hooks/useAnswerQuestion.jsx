import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { queryClient } from "../services/query";
import toast from 'react-hot-toast';
import { ToastModified } from "@/Components/toast";


const responseQuestion = async (params, success, error) => {
  const {user_response,question_id} = params;

  try {
    const { data: response } = await API.post("/user-answers/answer-question", {
      user_response,
      question_id,
    });

    console.log(response)

    toast((t) => <ToastModified points={response.pointsEarned} message={'Uau! Acertou em cheio!'} />, {
      style: {
        borderRadius: '10px',
        background: '#C4FFBF',
        color: '#005134',
      },
    });


    return response.data;
  } catch (err) {
    if(err.response?.data.code){
      toast((t) => <ToastModified message={'Epa! Quase acertou hein, continue!'} />, {
        style: {
          borderRadius: '10px',
          background: '#FFA4A4',
          color: '#511300',
        },
      });
    }
  }
};

const useAnswerQuestion = () => {
  return useMutation(["lesson-answer"], responseQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("lesson-answer");
    },
  });
};

export default useAnswerQuestion;
