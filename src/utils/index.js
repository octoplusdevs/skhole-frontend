export function formatCurrency(number, country = "PT-AO", currency = "AOA") {
  const formatter = new Intl.NumberFormat(country, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(number);
}

export function formatSecondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} horas`;
  } else if (minutes > 0) {
    return `${formattedMinutes}:${formattedSeconds} min`;
  } else {
    return `${formattedSeconds} s`;
  }
}

export function isObjectEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value !== undefined && value !== null && value !== "") {
        return false;
      }
    }
  }
  return true;
}
