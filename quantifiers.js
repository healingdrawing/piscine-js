const every = (arr, func) => {
  let res = true;
  arr.forEach((val) => (res = res && func(val)));
  return res;
};

const some = (arr, func) => {
  let res = false;
  arr.forEach((val) => (res = res || func(val)));
  return res;
};

const none = (arr, func) => {
  let res = true;
  arr.forEach((val) => (res = res && !func(val)));
  return res;
};