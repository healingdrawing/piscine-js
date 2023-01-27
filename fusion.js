const fusion = (ob1, ob2) => {
  if (getVarType(ob1) === getVarType(ob2)) {
    switch (getVarType(ob1)) {
      case "array": return [...ob1, ...ob2];
      case "string": return ob1 + " " + ob2;
      case "number": return ob1 + ob2;
      case "object":
        const o = { ...ob1 };
        Object.keys(ob2).map((key) => { o[key] = fusion(o[key], ob2[key]) });
        return o;
      default: return ob2;
    }
  }
  return ob2;
};

const getVarType = (data) => {
  switch (true) {
    case data instanceof Array: return "array";
    case data instanceof RegExp: return "expression";
    case data instanceof Set: return "set";
    case data === null: return "null";
    default: return typeof data;
  }
};
