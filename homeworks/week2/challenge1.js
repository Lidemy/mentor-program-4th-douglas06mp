function search(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (n === arr[middle]) return middle;

    if (n > arr[middle]) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    }

    if (n < arr[middle]) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    }
  }

  return -1;
}

search([1, 3, 10, 14, 39], 14);
