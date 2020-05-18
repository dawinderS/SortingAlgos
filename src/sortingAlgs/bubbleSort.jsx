export function bubbleSortAnimations(array) {
  let animations  = [];
  let auxillaryArray = array.slice();
  bubbleSort(auxillaryArray, animations);
  array = auxillaryArray;
  return [animations, array];
}

function bubbleSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i -1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (auxillaryArray[j] > auxillaryArray[j + 1]) {
        animations.push([j, auxillaryArray[j + 1]]);
        animations.push([j + 1, auxillaryArray[j]]);
        swap(auxillaryArray, j, j + 1);
      }
      else {
        animations.push([-1, -1]);
        animations.push([-1, -1]);
      }
    }
  }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
  let temp = auxillaryArray[firstIndex];
  auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  auxillaryArray[secondIndex] = temp;
}
