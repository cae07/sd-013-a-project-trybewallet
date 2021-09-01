export const payMethodOptions = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];
export const expenseCategoryOptions = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

export const roundNumber = (number) => (
  Math.round(number * 100) / 100
);
