const pick = (obj, keys) => {
  const o = {};
  if (!Array.isArray(keys)) keys = Array(keys);
  for (let each of keys) {
    if (obj.hasOwnProperty(each)) {
      o[each] = obj[each];
    }
  }
  return o;
};
const omit = (obj, keys) => {
  const o = {
    ...obj,
  };
  if (!Array.isArray(keys)) keys = Array(keys);
  for (let each of keys) {
    if (obj.hasOwnProperty(each)) {
      delete o[each];
    }
  }
  return o;
};