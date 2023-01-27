function letterSpaceNumber(str) {
  const regex = /[a-z]\s\d(?![a-z0-9])/gi;
  const result = str.match(regex);
  return result || [];
}

// Instructions

// Create a function named letterSpaceNumber that accepts a string; returning an array with every instance of a letter, followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter.

// Examples

console.log(letterSpaceNumber('example 1, example 20')) // output: ['e 1']
console.log(letterSpaceNumber('I like 7up.')) // []
