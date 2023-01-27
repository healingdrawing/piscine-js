async function race(promises) {
  return Promise.race(promises);
}

async function some(arr, count) {
  if (!arr.length || count < 1) return [];
  const result = [];
  for (const item of arr) {
    if (result.length >= count) break;
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve("nothing"), 3));
    const resolvedValue = await Promise.race([item, timeoutPromise]);
    if (resolvedValue !== "nothing") result.push(resolvedValue);
  }
  return result;
}


// Instructions

// Create two functions:

// race: that works like Promise.race.
// some: that takes an array of promises or values, and count number. It should return the first count resolved values. Empty arrays or a count of 0 return a promise resolving to undefined.
// Code provided

// The provided code will be added to your solution, and does not need to be submitted.

// Promise.race = undefined
// Notions

// Promise
// Promise.race
