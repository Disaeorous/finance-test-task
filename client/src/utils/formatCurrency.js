const options = {
  currency: 'USD',
  style: 'currency',
};

const CURRENCY_FORMATTER = new Intl.NumberFormat('ru-RU', options);

export const formatCurrency = (price) => {
  return CURRENCY_FORMATTER.format(price);
};
