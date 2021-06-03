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

//Edabit: Obscure string challenge -  it takes 0.5 seconds to write a character (not including spaces).
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

//Edabit: Return number of vege vs meat skewers
const bbqSkewers = grill => {
  const vege = grill.filter(x => x.includes('x')).length;
  return [grill.length - vege, vege];
};
/*test bbqSkewers(
["--oooo-ooo--", 
"--xx--x--xx--", 
"--o---o--oo--", 
"--xx--x--ox--", 
"--xx--x--ox--"]
)*/

//Edabit: filter duplicates and return the number of unique elements
function equal(a, b, c) {
  const solo = [...new Set(arguments)].length;
  return solo === 2 ? 2 : solo === 3 ? 0 : 3;
}

//Edabit: return middle of a str of n.length
const getMiddle = str => {
  const mid = str.length / 2;
  return str.length % 2 != 0 ? str[Math.floor(mid)] : str[mid - 1] + str[mid];
};

//Edabit: reverse only words beginnning with a specific character in a string
const specialReverse = (s, c) =>
  s
    .split(' ')
    .map(x => (x.startsWith(c) ? [...x].reverse().join('') : x))
    .join(' ');

//Edabit: return first repeat character in string or -1 if not present.
const firstRepeat = chars => {
  const dub = chars.match(/(\w)(?=.*\1)/);
  return dub != null ? dub[0] : '-1';
};

//Edabit: sum the numbers not included in an arr from min to max
const sumMissingNumbers = arr => {
  let sum = 0;
  const s = arr.sort((a, b) => a - b);
  for (let i = arr[0]; i < s[s.length - 1]; i++) {
    if (!s.includes(i)) {
      sum += i;
    }
  }
  return sum;
};
/*Best Solution: const sumMissingNumbers = a => {
  let tot = 0;
  for (let i = Math.min(...a) + 1, i < Math.max(...a); i++)
    if (!a.includes(i)) tot += i;
  return tot;
};*/

//Edabit: Replace value in array with values in str
const uncensor = (str, vowels) => {
  for (let i = 0; i < vowels.length; i++) {
    str = str.replace('*', vowels[i]);
  }
  return str;
};
uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo');

//Edabit: find the difference between even and odd numbers in an array
const warOfNumbers = arr =>
  Math.abs(arr.reduce((a, b) => a - (b % 2 ? b : -b), 0));

//Edabit: convert num to binary, reverse, convert to num
const reversedBinaryInteger = num =>
  parseInt(num.toString(2).split('').reverse().join(''), 2);

//Edabit: map through object array and multiply grocery quantity by price
const getTotalPrice = groceries => {
  let total = 0;
  groceries.map(x => (total += x.quantity * x.price));
  return +total.toFixed(1);
};
getTotalPrice([
  { product: 'Milk', quantity: 1, price: 1.5 },
  { product: 'Eggs', quantity: 12, price: 0.1 },
  { product: 'Bread', quantity: 2, price: 1.6 },
  { product: 'Cheese', quantity: 1, price: 4.5 },
]);

//Edabit: field goal challenge. determine if arrays contian specific character between index range
const isGoalScored = goal =>
  goal.slice(0, 3).some(x => x[0].indexOf('0') > 2 && x[0].indexOf('0') < 9);
isGoalScored([
  ['  #     #  '],
  ['  #  0  #  '],
  ['  #     #  '],
  ['  #######  '],
  ['     #     '],
  ['     #     '],
  ['     #     '],
]);

//Edabit: reverse all words with odd length in a string
const reverseOdd = str =>
  str
    .split(' ')
    .map(x => (x.length % 2 != 0 ? [...x].reverse.join('') : x))
    .join(' ');

//Edabit: split strings by size n, adding delimiter
function splitAndDelimit(str, num, del) {
  let start = 0;
  let end = num;
  let sum = [];
  for (let i = 0; i < str.length / num; i++) {
    sum.push([...str].slice(start, end).join(''));
    start += num;
    end += num;
  }
  return sum.join(del);
}
/*
better solution: 
function splitAndDelimit(str, num, del) {
	var r = [];
	for (var i = 0; i < str.length; i += num) {
		r.push(str.substring(i,i+num));
	}
}
	return r.join(del);
  */

//Edabit: Histogram Creator given an array of nums and a char
const histogram = (arr, char) => arr.map(x => char.repeat(x)).join('\n');

//Edabit: replace vowels with num then sum (in this challenge, letters 'i' & 'u' were not used but can be included)
const sumofVowels = str => {
  let vowel = { a: 4, e: 3, i: 1, sum: 0 };
  str.toLowerCase().replace(/[aei]/g, x => (vowel.sum += vowel[x]));
  return vowel.sum;
};

//Edabit: return object keys & values in array
const keysAndValues = obj => [Object.keys(obj), Object.values(obj)];

//Edabit: calculate user score in an object
const getXP = obj => {
  let sum = 0;
  const arr = [5, 10, 20, 40, 80];
  for (let i = 0; i < 5; i++) {
    sum += Object.values(obj)[i] * arr[i];
  }
  return sum + 'XP';
};
/*Best Solution: const getXP = obj => Object.values(obj).reduce((t, c, i) => 
                                        t + [5, 10, 20, 40, 80][i] * c, 0) + 'XP'; */

//Edabit: Given unique scores for each letter in alphabet, return statement based on sum of each letter
//example const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
const nameScore = name => {
  const score = name.split('').reduce((a, b) => a + scores[b], 0);
  return score <= 60
    ? 'NOT TOO GOOD'
    : score <= 300
    ? 'PRETTY GOOD'
    : score <= 599
    ? 'VERY GOOD'
    : 'THE BEST';
};

//Edabit: Given an array of star ratings(1 - 5), calculate the mean.
const starRating = arr => {
  const mean = (
    arr.reduce((a, b, i) => a + b * (i + 1)) / arr.reduce((a, b) => a + b)
  ).toFixed(2);
  return `[${mean}] ${'*'.repeat(Math.round(mean))}`;
};
//[55, 67, 98, 115, 61] => "[3.57] ****"

//Edabit: modify array by adding n*2 to odd nums and subtracting n*2 to even nums
const evenOddTransform = (arr, n) =>
  arr.map(x => (x % 2 != 0 ? x + n * 2 : x - n * 2));

//Edabit: calculate average word length in a string omitting punctuation
const averageWordLength = str =>
  +(str.replace(/[^a-z]/gi, '').length / str.split(' ').length).toFixed(2);

//Edabit: test is a string contains a word ending with a vowel adjacent to a word beginning with a vowel
const vowelLinks = str => /[aeiou] [aeiou]/gi.test(str);
