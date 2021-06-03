const vowelLinks = str => {
  const res = /[aeiou] [aeiou]/gi;
  return res.test(str);
};
