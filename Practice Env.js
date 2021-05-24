const starRating = arr => {
  const mean = (
    arr.reduce((a, b, i) => a + b * (i + 1)) / arr.reduce((a, b) => a + b)
  ).toFixed(2);
  return `[${mean}] ${'*'.repeat(Math.round(mean))}`;
};
