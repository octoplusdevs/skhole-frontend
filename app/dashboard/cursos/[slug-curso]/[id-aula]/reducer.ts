import { actions } from "./actions";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actions.GET_COURSE:
      return { ...state, currentCourse: action.payload };
    case actions.GET_LESSON:
      return { ...state, currentLesson: action.payload };
    case actions.TOGGLE_COURSE_STATUS:
      return { ...state, courseStatus: action.payload };
    case actions.TOGGLE_ACCORDION:
      return { ...state, accordionOpen: action.payload };
    default:
      return state;
  }
};

export { reducer };
