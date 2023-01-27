const filterKeys = (obj, func) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => func(key)))

const mapKeys = (obj, func) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [func(key), value]))

const reduceKeys = (obj, func, acc = "") =>
  (acc === "" ? Object.keys(obj).reduce(func) : Object.keys(obj).reduce(func, acc))
