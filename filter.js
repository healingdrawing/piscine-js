const filter = (arr, func) => {
  const ok = [];
  arr.forEach((val, index, arr) => (func(val, index, arr) ? ok.push(val) : 0));
  return ok;
};

const reject = (arr, func) => {
  const stillHere = [];
  arr.forEach((val, index, arr) => (func(val, index, arr) ? 0 : stillHere.push(val)));
  return stillHere;
};

const partition = (arr, func) => {
  const ok = [];
  const trash = [];
  arr.forEach((val, index, arr) =>
    func(val, index, arr) ? ok.push(val) : trash.push(val)
  );
  return [ok, trash];
};