const warOfNumbers = arr =>
  Math.abs(arr.reduce((a, b) => a - (b != 0 ? b : -b), 0));
