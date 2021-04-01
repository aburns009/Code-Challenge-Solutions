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
