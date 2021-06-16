function doubleSwap(str, c1, c2) {
  let swap = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (swap[i] === c1) {
      swap[i] = c2;
    } else if (swap[i] === c2) {
      swap[i] = c1;
    }
  }
  return swap.join('');
}
