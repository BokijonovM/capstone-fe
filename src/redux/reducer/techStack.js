import { SET_ALL_TECH_STACK_NEW_JOB } from "../action/index";
import { initialState } from "../store";

const techStackReducer = (state = initialState.techStacks, action) => {
    switch (action.type) {
        case SET_ALL_TECH_STACK_NEW_JOB:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
export default techStackReducer;
