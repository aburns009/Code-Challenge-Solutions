const findGlasses = arr => {
  let sum;
  arr.map((x, i) => {
    if (/O\-+O/.test(x)) {
      sum = i;
    }
  });
  return sum;
};
