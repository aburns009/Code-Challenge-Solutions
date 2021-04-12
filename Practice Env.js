function equal(a, b, c) {
  const solo = [...new Set(arguments)].length;
  return solo === 2 ? 2 : solo === 3 ? 0 : 3;
}

equal(7, 3, 7);
