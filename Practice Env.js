function mumbling(str) {
  let newNew = [];
  let newStr = str.toLowerCase().split('');
  let count = 1;
  for (let i = 0; i < newStr.length; i++) {
    newNew = newStr[i].repeat(count);
    count++;
  }
  console.log(newNew);
}
mumbling('MubAshIr');
