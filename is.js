is.num = function (value) {
  return typeof value === 'number';
};
is.nan = function (value) {
  return typeof value === 'number' && isNaN(value);
};
is.str = function (value) {
  return typeof value === 'string';
};
is.bool = function (value) {
  return typeof value === 'boolean';
};
is.undef = function (value) {
  return typeof value === 'undefined';
};
is.def = function (value) {
  return typeof value !== 'undefined';
};
is.arr = function (value) {
  return Array.isArray(value);
};
is.obj = function (value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};
is.fun = function (value) {
  return typeof value === 'function';
};
is.truthy = function (value) {
  return !!value;
};
is.falsy = function (value) {
  return !value;
};

// Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

// is.num: value is a number.
// is.nan: value is NaN.
// is.str: value is a string.
// is.bool: value is a boolean.
// is.undef: value is undefined.
// is.def: value is defined.
// is.arr: value is an array.
// is.obj: value is a simple object or null objects.
// is.fun: value is a function.
// is.truthy: value is truthy.
// is.falsy: value is falsy.