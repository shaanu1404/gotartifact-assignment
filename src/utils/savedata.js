export const USER_DATA_LS_KEY = "USER_DATA";

export const saveDataToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocal = (key) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
};
