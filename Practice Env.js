const lovesMe = n => {
  let glove = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      glove.push('Loves me');
    } else {
      glove.push('Loves me not');
    }
  }
  glove[glove.length - 1] = glove[glove.length - 1].toUpperCase();
  return glove.join(', ');
};
