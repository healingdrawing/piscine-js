function triangle(char, height) {
  var xstr = '';
  for (var i = 0; i < height; i++) {
    var str = '';
    for (var j = 0; j <= i; j++) {
      str += char;
    }
    xstr += str
    if (i < height - 1) {
      xstr += "\n";
    }
  }
  return xstr;
}

// Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

// The string will denote the characters which construct the triangle, and the number denotes its height.

// Example

// * character and depth of 5:
// *
// **
// ***
// ****
// *****
// No new line in last line