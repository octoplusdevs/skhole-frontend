export function formatCurrencyAngola(number) {
  const formatter = new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
  });

  return formatter.format(number);
}
