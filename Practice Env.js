const fruitSalad = arr => {
  let fruit = [];
  arr.map(x =>
    fruit.push(x.slice(0, Math.floor(x.length / 2)), x.slice(x.length / 2))
  );
  return fruit.sort().join('');
};
