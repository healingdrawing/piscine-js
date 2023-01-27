function indexOf(array, value, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

function lastIndexOf(array, value, fromIndex) {
  if (fromIndex === undefined || fromIndex > array.length - 1) {
    fromIndex = array.length - 1;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

function includes(array, value) {
  return indexOf(array, value) > -1;
};

// Create 3 functions which accept an array to be searched, and a value to be matched.

// indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
// lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
// includes: which returns true if the value was found in the array, and false otherwise.
// Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().