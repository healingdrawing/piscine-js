const deepCopy = (o) => {
  switch (true) {
    case typeof o !== 'object': return o;
    case o instanceof RegExp: return RegExp(o);
    default: return Array.isArray(o) ? [...o].map(deepCopy) : { ...o, ...Object.entries(o).reduce((o, [k, v]) => ({ ...o, [k]: deepCopy(v) }), {}) };
  }
};
