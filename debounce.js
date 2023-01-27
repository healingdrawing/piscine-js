const debounce = (fn, delay) =>
  opDebounce(fn, delay, { leading: false });

const opDebounce = (func, time, options = { leading: false }) => {
  let timer;
  return (...args) => {
    if (!timer && options.leading) func(...args);
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), time);
  };
};
