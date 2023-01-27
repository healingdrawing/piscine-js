const fold = (arr, func, acc) => {
  arr.forEach((val) => (acc = func(acc, val)));
  return acc;
};

const foldRight = (arr, func, acc) => {
  const newarr = arr.slice();
  newarr.reverse();
  newarr.forEach((val) => (acc = func(acc, val)));
  return acc;
};

const reduce = (arr, func, acc) => {
  typeof acc !== "undefined"
    ? arr.forEach((val) => (acc = func(acc, val)))
    : acc = reduce(arr.slice(1), func, arr[0]);
  return acc;
};

const reduceRight = (arr, func, acc) => {
  typeof acc !== "undefined"
    ? arr.forEach((val) => (acc = func(acc, val)))
    : acc = reduceRight(arr.slice(0, -1).reverse(), func, arr[arr.length - 1]);
  return acc;
};
