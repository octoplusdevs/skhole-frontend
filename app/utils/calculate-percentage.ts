const calculatePercentage = (part: number, total: number) => {
  const percentage = (part / total) * 100;
  return Number(percentage.toFixed(0));
};

export { calculatePercentage };
