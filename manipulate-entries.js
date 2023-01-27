const filterEntries = (obj, func) =>
  Object.fromEntries(Object.entries(obj).filter(func));

const mapEntries = (obj, func) =>
  Object.fromEntries(Object.entries(obj).map(func));

const reduceEntries = (obj, func, acc = "") =>
  (acc || acc == 0) ? Object.entries(obj).reduce(func, acc) : acc + Object.entries(obj).reduce(func);

// they want that you create these three functions above, but you do not have to use them inside bottom functions. These three above tested separately. Bad testing implementation.

const totalCalories = (obj) =>
  Object.entries(obj)
    .map(([k, v]) => [k, (Math.round(nutritionDB[k]["calories"] * v) / 1000) * 10])
    .reduce((acc, [_, v]) => acc + v, 0);

const lowCarbs = (obj) =>
  Object.entries(obj)
    .filter(([k, v]) => (v / 100) * nutritionDB[k]["carbs"] < 50)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})

const cartTotal = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) =>
      [k, Object.fromEntries(
        Object.entries(nutritionDB[k]).map(([key, val]) =>
          [key, parseFloat(((val * v) / 100).toFixed(3))]
        )
      )]
    )
  );
