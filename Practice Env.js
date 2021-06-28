const evenOrOdd = str => {
  let odd = 0;
  let even = 0;
  [...str].map(x => (x % 2 != 0 ? (odd += +x) : (even += +x)));
  if (odd > even) {
    return 'Odd is greater than Even';
  } else if (even > odd) {
    return 'Even is greater than Odd';
  } else return 'Even and Odd are the same';
};
