export function formatCurrency(number, country = "PT-AO", currency = "AOA") {
  const formatter = new Intl.NumberFormat(country, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(number);
}
