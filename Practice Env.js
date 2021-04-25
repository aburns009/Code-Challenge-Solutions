const uncensor = (str, vowels) => {
  for (let i = 0; i < vowels.length; i++) {
    str = str.replace('*', vowels[i]);
  }
  return str;
};
uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo');
