const indexShuffle = str => {
  let even = '';
  let odd = '';
  [...str].map((x, i) => (i % 2 != 0 ? (odd += x) : (even += x)));
  return even + odd;
};
