
function sameAmount(string, regex1, regex2) {
  let match1 = (string.match(new RegExp(regex1, "g")) || []).length;
  let match2 = (string.match(new RegExp(regex2, "g")) || []).length;
  return match1 === match2;
}

// function sameAmount(str, re1, re2) {
//   return (str.match(re1) || []).length === (str.match(re2) || []).length;
// }
// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
// Examples
console.log(sameAmount('example 1, example 20', /[a-z]/gi, /\d/gi)) // output: true
console.log(sameAmount('', /[a-z]/gi, /\d/gi)) //
// console.log(sameAmount(data, /q /, /qqqqqqq/))

// Create a function named sameAmount, that takes three arguments: a string, and 2 regular expressions.Your function should return a boolean.

// The objective is to confirm that the regular expressions match the string the same number of times.