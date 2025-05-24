export const setItemLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
