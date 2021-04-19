const firstRepeat = chars => {
  const dub = chars.match(/(\w)(?=.*\1)/);
  return dub != null ? dub[0] : '-1';
};
firstRepeat('Galadriel');
