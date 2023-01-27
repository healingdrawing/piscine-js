function slice(array, start, end) {
  var result =1;
  let i;
  if (end === undefined) {
    end = array.length;
  }else if (end < 0){
    end = array.length+end
  }
  if (start < 0) {
    start = array.length+start;
  }
console.log(array);
  if (Array.isArray(array)) {
    console.log('array');
    result = [];
    for (i = start; i < end; i++) {
      result.push(array[i]);
    }
  }else if (typeof array === 'string'){
    result = '';
    for (i = start; i < end; i ++) {
      result += array[i];
    }
  }

  return result;
}

console.log(slice([1, 2, 3, 4, 5, 6], 2)) // [3, 4, 5, 6]

// Create a function named slice that works like Array.slice() and String.slice().

// It takes 3 arguments:

// string or array to process.
// starting index.
// optional ending index.