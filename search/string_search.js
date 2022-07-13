function naiveSearch(long, short) {
  if (short.length > long.length) return [];
  let indices = [];
  for (let index = 0; index < long.length; index++) {
    if (long[index] !== short[0]) continue;
    else if (long[index] === short) indices.push(index);
    else {
      index++;
      for (let j = 1; j < short.length; j++) {
        if (short[j] !== long[index]) break;
        if (j !== short.length - 1) index++;
        else indices.push(index - short.length + 1);
      }
    }
  }
  return indices;
}
