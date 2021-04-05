const replaceVowel = word => {
  const vowel = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return word.replace(/[aeiou]/g, x => vowel[x]);
};
