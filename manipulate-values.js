const filterValues = (obj, func) =>
  Object.fromEntries(Object.entries(obj).filter(([_, val]) => func(val)));

const mapValues = (obj, func) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, func(value)]));

const reduceValues = (obj, func, acc = 0) =>
  Object.values(obj).reduce(func, acc);
