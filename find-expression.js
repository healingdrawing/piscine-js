// check the value is not an number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function findExpressionMultipleThenAdd(number) {
  let n = 1;
  let result = '1';
  if (number < 1 || number % 1 !== 0 || number === Infinity || !isNumber(number) || !Number.isInteger(number)) {
    return undefined;
  }
  let m2 = 0; // how many times multiply by 2 as string mul2
  let a4 = 0; // how many times add 4 as string add4
  while (n <= number) {
    n *= 2;
    m2++;
  }
  if (n > number) {
    n /= 2; // rollback to condition when n still not greater than number
    m2--;
  }
  while (n < number) {
    n += 4;
    a4++;
  }
  if (n > number) {
    return undefined;
  }
  // collecting of final result as string
  for (let i = 0; i < m2; i++) {
    result += ' ' + mul2;
  }
  for (let i = 0; i < a4; i++) {
    result += ' ' + add4;
  }
  return result;
}

function findExpressionAddThenMultiple(number) {
  let n = 1;
  let result = '1';
  if (number % 2 !== 0 || number < 1 || number % 1 !== 0 || number === Infinity || !isNumber(number) || !Number.isInteger(number)) {
    return undefined;
  }
  let m2 = 0; // how many times multiply by 2 as string mul2
  let a4 = 0; // how many times add 4 as string add4

  while (n < number) {
    n += 4;
    a4++;
  }
  if (n > number) {
    n -= 4; // rollback to condition when n still not greater than number
    a4--;
  }
  let tail = number - n;
  while (n + tail <= number) {
    tail *= 2;
    m2++;
  }


  if (n > number) {
    return undefined;
  }
  // collecting of final result as string
  for (let i = 0; i < m2; i++) {
    result += ' ' + mul2;
  }
  for (let i = 0; i < a4; i++) {
    result += ' ' + add4;
  }
  return result;
}

function findExpression(number) {
  let result = findExpressionMultipleThenAdd(number);
  if (result === undefined) {
    result = findExpressionAddThenMultiple(number);
  }
  return result;
}

const add4 = '+4'
const mul2 = '*2'

console.log(findExpression(1)) // 1
console.log(findExpression(2)) // 1 *2
console.log(findExpression(3)) // undefined
console.log(findExpression(4)) // 1 *2 *2
console.log(findExpression(14))

// Create a function named findExpression that takes a number as parameter and returns a string.

// 2 constant variables will be made available to your function: add4 and mul2.
// Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
// If the number can not be reached you should return undefined
// For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.

// Notions

// Loops
// Recursion
// Code provided

// The provided code will be added to your solution, and does not need to be submitted.

// const add4 = '+4'
// const mul2 = '*2'
