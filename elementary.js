function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < Math.abs(b); i++) {
    result += a;
  }
  return (b<0)?-result:result;
}
function divide(a, b) {
  let result = 0;
  let asign = (a<0)?-1:1;
  let bsign = (b<0)?-1:1;
  a = Math.abs(a);
  b = Math.abs(b);
  while (a >= b) {
    a -= b;
    result++;
  }
  return multiply(asign,bsign)<0?-result:result;
}
function modulo(a, b) {
  let asign = (a<0)?-1:1;
  // let bsign = (b<0)?-1:1;
  a = Math.abs(a);
  b = Math.abs(b);
  while (a >= b) {
    a -= b;
  }
  return (asign<0)?-a:a;
}

// Create 3 functions which each take (a, b) as arguments:

// multiply that acts like the * operator, without using it.
// divide that acts like the integer division operator /, without using it.
// modulo that acts like the % operator, without using it.
