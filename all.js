const all = async (obj) => {
  const res = {};
  for (const key of Object.keys(obj)) res[key] = await obj[key];
  return res;
};


// Create a function named all that works like Promise.all but with objects (instead of arrays).

// Code provided

// The provided code will be added to your solution, and does not need to be submitted.

// Promise.all = undefined
// Notions

// Promise.js
// Promise.all