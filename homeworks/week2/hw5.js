function join(arr, concatStr) {
  if (arr.length === 0) return '';

  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + (i === arr.length - 1 ? '' : concatStr);
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  while (times > 0) {
    result += str;
    times--;
  }
  return result;
}

console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('yo', 3));
