export const MY_USER_INFO = "MY_USER_INFO";
export const SET_SINGLE_JOB = "SET_SINGLE_JOB";
export const SET_ALL_COMPANIES = "SET_ALL_COMPANIES";
export const SET_ALL_TECH_STACK_NEW_JOB = "SET_ALL_TECH_STACK_NEW_JOB";

export const setUserInfoAction = (userInfo) => ({
  type: MY_USER_INFO,
  payload: userInfo,
});

export const setCompaniesAction = (companies) => ({
  type: SET_ALL_COMPANIES,
  payload: companies,
});

export const setSingleJobAction = (job) => ({
  type: SET_SINGLE_JOB,
  payload: job,
});

export const setTechStackAction = (tech) => ({
  type: SET_ALL_TECH_STACK_NEW_JOB,
  payload: tech,
});