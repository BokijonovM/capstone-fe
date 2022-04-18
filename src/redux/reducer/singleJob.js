import { SET_SINGLE_JOB } from "../action/index";
import { initialState } from "../store";

const singleJobReducer = (state = initialState.singleJob, action) => {
  switch (action.type) {
    case SET_SINGLE_JOB:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default singleJobReducer;
