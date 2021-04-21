const sumMissingNumbers = arr => {
  let sum = 0;
  const s = arr.sort((a, b) => a - b);
  for (let i = arr[0]; i < s[s.length - 1]; i++) {
    if (!s.includes(i)) {
      sum += i;
    }
  }
  return sum;
};
const sumMissingNumbers = a => {
  let tot = 0;
  for (let i = Math.min(...a) + 1, j = Math.max(...a); i < j; i++)
    if (!a.includes(i)) tot += i;
  return tot;
};
