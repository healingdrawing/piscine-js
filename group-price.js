function groupPrice(price) {
  const re = /([^(\s|0-9|\.)]+)(\d+)(?:\.(\d+))?/g;
  const result = [];
  let match;
  while ((match = re.exec(price)) !== null) {
    result.push([match[0], ...match.slice(2)]);
  }
  return result;
}

// console.log(groupPrice('The price of the cereals is $4.00.')); // [["$4.00", "4", "00"]]
// console.log(groupPrice('The price of the cereals is usd$24.00.')); // [["usd$24.00", "24", "00"]]
// console.log(groupPrice('this, 0.32, is not a match'));

// Create a function named groupPrice, that can find prices in a given string.

// Your function will return 2D array with the full price breakdown.

// If there is no match, your function should return an empty array.

// Example

// Given price of USD12.31:

// [["USD12.31", "12", "31"]]