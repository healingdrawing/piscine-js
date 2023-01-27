function reverse(array) {
  let arr =[];
  for (var i = array.length - 1; i >-1; i--) {
    arr.push(array[i]);
  }
  if (typeof array === 'string') {
    arr = arr.join('');
  }
  return arr;
}

console.log(reverse([1, 2, 3]))
// Create a function named reverse which accepts an array or a string. It should work like Array.reverse(), and of course you cannot use that.