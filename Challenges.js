//My solutions to various coding challenges

// Edabit: Capitalize Every Word in Sentence
const makeTitle = str =>
  str.split(' ').map(x => x[0].toUpperCase() + x.slice(1));

//Edabit: Increment each letter in word, join with hyphens
const mumbling = str => {
  let sum = [];
  let letters = str.toLowerCase().split('');
  let count = 1;
  for (let i = 0; i < letters.length; i++) {
    sum.push(letters[i].repeat(count));
    count++;
  }
  return sum.map(x => x[0].toUpperCase() + x.slice(1)).join('-');
};
/*Best solution: function mumbling(str) {
	return [...str.toLowerCase()]
    .map((l, i) => l.toUpperCase() + l.repeat(i))
    .join('-');
} */

//Return the Sum of the Two Smallest Numbers not including negs
const sumTwoSmallestNums = arr => {
  const pos = arr.filter(x => x > 0).sort((a, b) => a - b);
  return pos[0] + pos[1];
};

//Create a function that takes three arguments a, b, c and returns
//the sum of the numbers that are evenly divided by c from the range a, b inclusive.
const evenlyDivisible = (a, b, c) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      sum += i;
    }
  }
  return sum;
};

//Edabit: Obscure string challenge it takes 0.5 seconds to write a character (not including spaces).
//Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.
const timeToFinish = (f, p) =>
  f === p ? 0 : f.slice(-(f.length - p.length)).replace(/\s/g, '').length * 0.5;

//replace multiple letters in a string
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

//Edabit: find value within an array.
const inBox = arr => arr.some(x => x.includes('*'));
