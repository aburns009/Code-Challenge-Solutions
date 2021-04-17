const specialReverse = (s, c) =>
  s
    .split(' ')
    .map(x => (x.startsWith(c) ? [...x].reverse().join('') : x))
    .join(' ');
