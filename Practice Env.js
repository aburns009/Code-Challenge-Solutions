const halfLifeCalculator = (mass, hlife, n) => {
  let count = n;
  while (count > 0) {
    mass = mass / 2;
    count--;
  }
  return [+mass.toFixed(3), hlife * n];
};
