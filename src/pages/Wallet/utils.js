export const paymentMethods = [
  { value: 'money', label: 'Dinheiro' },
  { value: 'credit', label: 'Cartão de crédito' },
  { value: 'money', label: 'Cartão de débito' },
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
