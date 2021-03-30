function sumTwoSmallestNums(arr) {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] === Math.min(arr)) {
      sum.push(arr[i]);
    }
  }
  console.log(sum);
}
sumTwoSmallestNums([2, 9, 6, -1]);
