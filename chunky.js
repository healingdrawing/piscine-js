function chunk(arr, size) {
  let narr = []
  while (arr.length > 0) {
    if (arr.length >= size) {
      narr.push(arr.slice(0, size))
      arr = arr.slice(size)
    } else {
      narr.push(arr)
      arr = []
    }
  }
  return narr
}

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(chunk([], 3));

// Create a function named chunk which accepts an array and an integer representing a size.

// Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

// If the array cannot be split evenly, the last sub-array will contain the remaining elements.