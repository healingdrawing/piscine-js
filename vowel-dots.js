const vowels = /[aeiou]/gi;
function vowelDots(string) {
  return string.replace(vowels, '$&.');
}

console.log(vowelDots('hello world'))

// Create a function named vowelDots that receives a string. Your function should return a new string with a . after every vowel.

// Your RegEx should be stored in a variable named vowels.

// a, e, i, o and u are considered as vowels here.

