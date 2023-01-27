
function get(src, path) {
  let keys = path.split('.');
  return keys.reduce((obj, key) => {
    return obj ? obj[key] : undefined;
  }, src);
}

// Create a function named get which takes two arguments:

// src: an object.
// path: a string representing a path.
// Your function will return the value at the given path in the src object.

// Example:

// wtf... integrated vscode terminal show nothing always, but submitting pass some tests. Perhaps node js ignores something silently
const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
get(src, path) // -> 'peekaboo'