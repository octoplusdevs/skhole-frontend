export const useGetItemLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
};
