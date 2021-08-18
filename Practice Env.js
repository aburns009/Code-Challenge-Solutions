const zipIt = (women, men) => {
  let zip = [];
  if (men.length != women.length) return "sizes don't match";
  for (let i = 0; i < women.length; i++) {
    zip.push(Array(women[i], men[i]));
  }
  return zip;
};
