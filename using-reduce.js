const adder = (arr, ext) =>
  ext !== undefined
    ? arr.reduce((acc, each) => acc + each, ext)
    : arr.reduce((acc, each) => acc + each, 0);

const sumOrMul = (arr, ext) =>
  ext !== undefined
    ? arr.reduce((acc, each) => (each % 2 === 1 ? acc + each : acc * each), ext)
    : arr.reduce((acc, each) => (each % 2 === 1 ? acc + each : acc * each), 0);

const funcExec = (func, x) => func.reduce((sum, current) => current(sum), x);