const getMiddle = str => {
  const mid = str.length / 2;
  return str.length % 2 != 0 ? str[Math.floor(mid)] : str[mid - 1] + str[mid];
};
