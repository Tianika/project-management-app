export const deleteUserInfoFromLocalStorage = () => {
  localStorage.setItem('token', '');
  localStorage.setItem('name', '');
  localStorage.setItem('login', '');
  localStorage.setItem('userId', '');
};
