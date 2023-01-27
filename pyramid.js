function pyramid(s, n) {
  let xstr = '';
  let displacement = n - 1;
  let lena = s.toString().length;
  let step = 1;
  let width = 1;
  while (step <= n) {
    let str = '';
    for (let i = 0; i < displacement; i++) {
      str += ' '.repeat(lena);
    }
    displacement--;

    for (let i = 0; i < width; i++) {
      str += s;
    }
    xstr += str;
    if (step < n) {
      xstr += '\n';
    }
    step++;
    width += 2;

  }
  return xstr;
}

// Create a function named pyramid which works just like your triangle function. But, it should be pyramid shaped.

// Output example

// * character and depth of 5 :
//     *
//    ***
//   *****
//  *******
// *********
// No new line in last line

console.log(pyramid('*', 5));

console.log(pyramid('**', 5));

console.log(pyramid('***', 5));

console.log(pyramid('*', 10));