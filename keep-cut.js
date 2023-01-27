function cutFirst(str) {
  return str.slice(2);
}
function cutLast(str) {
  return str.slice(0, str.length-2);
}
function cutFirstLast(str) {
  return cutFirst(cutLast(str));
}
function keepFirst(str) {
  return str.slice(0, 2);
}
function keepLast(str) {
  return str.slice(str.length-2);
}
function keepFirstLast(str) {
  if (str.length < 5) {
    return str;
  }
  return keepFirst(str) + keepLast(str);
}


// console.log(cutFirst('hello')); // 'llo'

// Create some functions, which each take a string as an argument:

// cutFirst: returns the string with the first 2 characters removed.

// cutLast returns the string with the last 2 characters removed.

// cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

// keepFirst returns only the first 2 characters.

// keepLast returns only the last 2 characters.

// keepFirstLast returns the first 2 characters, and the last 2 characters.