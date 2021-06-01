const evenOddTransform = (arr, n) =>
  arr.map(x => (x % 2 != 0 ? x + n * 2 : x - n * 2));
