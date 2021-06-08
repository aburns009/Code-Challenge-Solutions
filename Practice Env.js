const wrapAround = (string, offset) => {
  if (Math.abs(offset) > string.length) offset = offset % string.length;
  return string.slice(offset) + string.slice(0, offset);
};
