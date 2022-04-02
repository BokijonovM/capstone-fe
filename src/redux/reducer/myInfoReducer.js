import { MY_USER_INFO } from "../action/index";
import { initialState } from "../store";

const userReducer = (state = initialState.userMe, action) => {
  switch (action.type) {
    case MY_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
