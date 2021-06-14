const extendVowels = (word, num) =>
  !Number.isInteger(num) || num < 0
    ? 'invalid'
    : word.replace(/[aeiou]/gi, x => x.repeat(num + 1));
