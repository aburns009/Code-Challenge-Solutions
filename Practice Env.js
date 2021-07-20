const filterUnique = arr =>
  arr.filter(x => [...new Set(x)].length === x.length);
