const bbqSkewers = grill => {
  const vege = grill.filter(x => x.includes('x')).length;
  return [grill.length - vege, vege];
};
