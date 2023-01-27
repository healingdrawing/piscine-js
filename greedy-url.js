function getURL(dataSet) {
  const re = /https?:\/\/\S+/g;
  return dataSet.match(re);
}

function greedyQuery(dataSet) {
  const re = /https?:\/\/\S+\?\S+&\S+&\S+/g;
  return dataSet.match(re);
}

function notSoGreedy(dataSet) {
  const re = /https?:\/\/\S+\?\S+&\S+/g;
  const re4 = /https?:\/\/\S+\?\S+&\S+&\S+&\S+/g;
  const result = dataSet.match(re);
  const result4 = dataSet.match(re4);
  if (result4) {
    return result.filter((item) => !result4.includes(item));
  }
  return result;
}

// Create 3 functions, which accept a string which we'll refer to as the dataSet. Your function should return an array of strings.

// getURL: returns all URLs present in the dataSet.
// greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
// notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.
// Example dataSet:

// qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you
// Only http and https URLs are valid. You can search for greedy quantifiers for help.