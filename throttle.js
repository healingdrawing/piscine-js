const opThrottle = (func, delay, options = { leading: false, trailing: false }) => {
  let debounceTimer;
  let active = false;
  let executed = false;
  switch (true) {
    case options.leading && options.trailing: return (...a) => {

      switch (true) {
        case active: break
        default: active = true;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            func(...a);
            active = false;
          }, delay);
      }

      switch (true) {
        case executed: break
        default: executed = true;
          func(...a);
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            executed = false;
          }, delay);
      }

    }
    case options.leading: return (...a) => {

      switch (true) {
        case executed: break
        default: executed = true;
          func(...a);
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            executed = false;
          }, delay);
      }

    }
    case options.trailing: return (...a) => {

      switch (true) {
        case active: break
        default: active = true;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            func(...a);
            active = false;
          }, delay);
      }

    }
    default: return () => { };
  }

};

const throttle = (func, wait) => opThrottle(func, wait, { leading: true, trailing: true });