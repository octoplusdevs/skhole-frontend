const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const time = (n: number) => String(n).padStart(2, "0");

  return hrs > 0
    ? `${time(hrs)}:${time(mins)}:${time(secs)}`
    : `${time(mins)}:${time(secs)}`;
};

export { formatTime };
