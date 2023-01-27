// looks like it should be recursive function, up to infinity, to unpack all the arrays
function flat(arr, depth = 1) {
  if (depth === 0) { // If diving is deeper than depth , than stop dive deeper, and just return arr .
    return arr;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) { // iterate every item in array
    if (Array.isArray(arr[i])) { // if item still array then dive deeper, up to depth limit.
      result = result.concat(flat(arr[i], depth - 1));
    } else { // if item not an array then just add it to result
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(flat([]))
// console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 0));
// console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 1));
// console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 2));
// console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 3));
// console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], 4));
// console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, 9]]], Infinity));
// console.log(flat([1, [2, [3]]])) // [1, 2, [3]]

// Create a function named flat that works like Array.flat(), except its first argument is the array.

// Notions

// Flat
// Code provided

// The provided code will be added to your solution, and does not need to be submitted.

// Array.prototype.flat = undefined