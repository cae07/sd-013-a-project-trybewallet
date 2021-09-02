export const paymentMethods = [
  { value: 'money', label: 'Dinheiro' },
  { value: 'credit', label: 'Cartão de crédito' },
  { value: 'debit', label: 'Cartão de débito' },
];

export const tags = [
  { value: 'food', label: 'Alimentação' },
  { value: 'leisure', label: 'Lazer' },
  { value: 'work', label: 'Trabalho' },
  { value: 'transport', label: 'Transporte' },
  { value: 'health', label: 'Saúde' },
];

export const coinsSelect = (coins) => (
  coins.map((coin) => ({ value: coin, label: coin }))
);

export const makeSumExpenses = (expenses) => expenses
  .reduce((acc, { value, currency = 'USD', exchangeRates }) => {
    acc += (Number(value) * Number(exchangeRates[currency].ask));
    return acc;
  }, 0);

export const makeSumExpense = ({
  value,
  currency,
  exchangeRates,
}) => (Number(value) * Number(exchangeRates[currency].ask)).toFixed(2);
