const averageWordLength = str =>
  +(str.replace(/[^a-z]/gi, '').length / str.split(' ').length).toFixed(2);
