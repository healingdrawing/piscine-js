const invert = (obj) => {
  const newObj = {};
  const keyvals = Object.entries(obj).filter(([key]) => obj.hasOwnProperty(key));
  keyvals.forEach(([key, val]) => {
    newObj[val] = key;
  });
  return newObj;
};
