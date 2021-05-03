const reversedBinaryInteger = num =>
  parseInt(num.toString(2).split('').reverse().join(''), 2);
