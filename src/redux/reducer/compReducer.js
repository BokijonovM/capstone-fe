import { SET_ALL_COMPANIES } from "../action/index";
import { initialState } from "../store";

const companiesReducer = (state = initialState.companies, action) => {
  switch (action.type) {
    case SET_ALL_COMPANIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default companiesReducer;
