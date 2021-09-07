const fixedRounded = (value, decimals = 2) => (Math.round(value * 100) / 100)
  .toFixed(decimals);

export default fixedRounded;
