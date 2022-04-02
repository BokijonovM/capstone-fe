export const MY_USER_INFO = "MY_USER_INFO";

export const setUserInfoAction = (userInfo) => ({
  type: MY_USER_INFO,
  payload: userInfo,
});
