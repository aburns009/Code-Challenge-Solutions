const getTotalPrice = groceries => {
  let total = 0;
  groceries.map(x => (total += x.quantity * x.price));
  return +total.toFixed(1);
};
