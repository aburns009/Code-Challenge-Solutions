const isGoalScored = goal =>
  goal.slice(0, 3).some(x => x[0].indexOf('0') > 2 && x[0].indexOf('0') < 9);
