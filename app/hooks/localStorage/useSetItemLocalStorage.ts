export const useSetItemLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
