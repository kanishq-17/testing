arr = [7, 3, 0, 2, 9, 6];

function sort() {
  let max = arr[0];
  let min = arr[0];

  //   maximum
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  //   minimum
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(`max: ${max}, min: ${min}`);
}

sort();

// ? Bubble Sort
arr = [9, 8, 13, 49, 41, 6, 46];

function bubbleSort() {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
      }
    }
    if (isSwapped === false) break;
  }
  return arr;
}

console.log(bubbleSort());

// ? Insertion Sort
arr = [3, 6, 2, 1, 5, 7];

function insertionSort() {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

console.log(insertionSort());

// ? Linear Search

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return `Element ${target} found at index: ${i}`;
  }
  return `Element, ${target} not present in array`;
};

console.log(linearSearch([45, 6, 7, 16, 13, 49, 491], 6));

// ? Binary Search - only works on sorted array in ascending order

arr = [3, 5, 6, 8, 26, 34, 88];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle])
      return `Element ${target} found at index: ${middle}`;
    else if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

console.log(binarySearch(arr, 8));

// ? Bubble Sort

const arr = [5, 1, 2, 3]; // j > j+1

function bubbleSort() {
  let n = arr.length; // 9-1 = 8

  for (let i = 0; i < n - 1; i++) {
    // i = 0; i < n-1 (8-1 = 7)

    let isSwapped = false; // flag
    // let counter = 0;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
        // counter++;
      }
      // console.log(`iteration : ${counter} complete`);
      // console.log(arr);
    }
    // j = 0; j < n-1-i (8-1-0 = 7)
    if (isSwapped === false) break;
  }
  return arr;
}

console.log(bubbleSort());

// ? Selection Sort

arr = [7, 0, 5, 4, 3, 1, 2, 6];

function selectionSort() {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort());

// ? Insertion Sort

// ? Merge Sort
