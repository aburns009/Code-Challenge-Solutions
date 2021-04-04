const timeToFinish = (f, p) =>
  f === p ? 0 : f.slice(-(f.length - p.length)).replace(/\s/g, '').length * 0.5;
