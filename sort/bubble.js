function bubbleSort(array) {
  const swap = (arrToSwap, idx1, idx2) =>
    ([arrToSwap[idx1], arrToSwap[idx2]] = [arrToSwap[idx2], arrToSwap[idx1]]);

  for (let i = 0; i < array.length; i++) {
    let noSwaps = true;

    for (let j = 0; j < array.length - (1 + i); j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
