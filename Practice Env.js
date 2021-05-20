const nameScore = name => {
  const score = name.split('').reduce((a, b) => a + scores[b], 0);
  return score <= 60
    ? 'NOT TOO GOOD'
    : score <= 300
    ? 'PRETTY GOOD'
    : score <= 599
    ? 'VERY GOOD'
    : 'THE BEST';
};
