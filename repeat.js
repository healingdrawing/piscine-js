function repeat(string, number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += string;
  }
  return result;
}

// Create a function named repeat that takes a string and a number as arguments, and returns the string repeated as many times as the number describes. It should function like String.repeat(), but of course you must make your own.