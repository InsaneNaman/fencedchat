//utils to play with localstorage

export const getItemFromLocalStorage = (item) => {
  return localStorage.getItem(item);
};
export const saveItemInLocalStorage = (item, value) => {
  return localStorage.setItem(item, value);
};
export const removeItemFromLocalStorage = (item) => {
  return localStorage.removeItem(item);
};
export const resetLocalStorage = () => {
  localStorage.clear();
};
