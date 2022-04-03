export const MY_USER_INFO = "MY_USER_INFO";
export const SET_ALL_COMPANIES = "SET_ALL_COMPANIES";

export const setUserInfoAction = (userInfo) => ({
  type: MY_USER_INFO,
  payload: userInfo,
});

export const setCompaniesAction = (companies) => ({
  type: SET_ALL_COMPANIES,
  payload: companies,
});
