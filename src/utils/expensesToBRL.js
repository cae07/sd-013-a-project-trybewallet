function expensesToBRL(expenses) {
  const expensesSum = expenses.reduce((acc, curr) => {
    const rate = curr.exchangeRates[curr.currency];
    return acc + Number(curr.value) * rate.ask;
  }, 0);
  return expensesSum;
}

export default expensesToBRL;
