function arrToSet(arr) {
  // ...
  return new Set(arr);
}
function arrToStr(arr) {
  // ...
  return arr.join('');
}
function setToArr(set) {
  // ...
  return Array.from(set);
}
function setToStr(set) {
  // ...
  return Array.from(set).join('');
}
function strToArr(str) {
  // ...
  return str.split('');
}
function strToSet(str) {
  // ...
  return new Set(str.split(''));
}
function mapToObj(map) {
  // ...
  return Object.fromEntries(map);
}
function objToArr(obj) {
  // ...
  return Object.keys(obj).map(key => obj[key]);
}
function objToMap(obj) {
  // ...
  return new Map(Object.entries(obj));
}
function arrToObj(arr) {
  // ...
  return Object.assign({}, arr);
}
function strToObj(str) {
  // ...
  return Object.assign({},str.split(''));
}
function superTypeOf(value) {
  // ...
  if (Array.isArray(value)) {
    return 'Array';
  }
  if (value instanceof Set) {
    return 'Set'; // looks like they want capitalized
  }
  if (value instanceof Map) {
    return 'Map'; // looks like they want capitalized
  }
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  if ( typeof value === typeof superTypeOf ) {
    return 'Function';
  }
  if (value instanceof Object) {
    return 'Object'; // yep, object to capitalized in tests
  }
  return (typeof value).charAt(0).toUpperCase() + (typeof value).slice(1);
}
// Write a bunch of functions which converts data from one type to another:

// arrToSet: from Array to Set.
// arrToStr: from Array to string.
// setToArr: from Set to Array.
// setToStr: from Set to string.
// strToArr: from string to Array.
// strToSet: from string to Set.
// mapToObj: from Map to Object.
// objToArr: from Object to Array.
// objToMap: from Object to Map.
// arrToObj: from Array to Object.
// strToObj: from string to Object.
// Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.