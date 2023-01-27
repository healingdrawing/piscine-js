function nasa(N) {
  let res = []
  let nx = 1
  while (nx <= N) {

    if (!(nx % 5) && !(nx % 3)) {
      res.push("NASA");
    } else if (!(nx % 5)) {
      res.push("SA");
    } else if (!(nx % 3)) {
      res.push("NA");
    } else {
      res.push(nx)
    }
    nx++
  }
  res = res.join(" ")
  return res
}

console.log(nasa(0))
console.log(nasa(1))
console.log(nasa(2))
console.log(nasa(15))

// Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

// Convert numbers which are divisible by 3 to "NA".
// Convert numbers which are divisible by 5 to "SA".
// Convert numbers which are divisible by 3 and 5 to "NASA".
