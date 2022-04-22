export const saveUserDetailsInLocalStorage = (params) => {
  localStorage.setItem("userDetails", JSON.stringify(params));
};

export const getUserDetailsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("userDetails"));
};
