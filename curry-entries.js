const defaultCurry = (first) => (second) =>
  Object.assign({}, first, second);

const mapCurry = (func) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(func))

const reduceCurry = (func) => (obj, acc = "") =>
  (acc || acc == 0) ? Object.entries(obj).reduce(func, acc) : acc + Object.entries(obj).reduce(func);

const filterCurry = (func) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(func));

const reduceScore = (obj, acc) =>
  Object.values(obj).filter(v => v["isForceUser"])
    .reduce((acc, v) => acc + v.shootingScore + v.pilotingScore, acc);

const filterForce = (obj) =>
  Object.entries(obj)
    .filter(([_, v]) => v["isForceUser"] && v.shootingScore >= 80)
    .reduce((a, [k, v]) => ({ ...a, [k]: v }), {})

const mapAverage = (obj) =>
  Object.entries(obj).map(([k, v]) => [k, { ...v, averageScore: (v.shootingScore + v.pilotingScore) / 2 }])
    .reduce((a, [k, v]) => ({ ...a, [k]: v }), {})