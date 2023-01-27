const flags = (obj) => {
  const res = {};
  const alias = {};
  alias.h = "help";
  let last;
  for (let prop in obj)
    if (prop !== "help") {
      let short = prop[0];
      alias[short] = prop;
      last = prop;
    }
  res.alias = alias;
  let description = "";
  if (obj.help)
    for (let i = 0; i < obj.help.length; i++) {
      let elem = obj.help[i];
      description += `-${elem[0]}, --${elem}: ${obj[elem]}`;
      if (i < obj.help.length - 1) description += "\n";
    }
  else
    for (let elem in obj)
      if (elem !== "help") {
        description += `-${elem[0]}, --${elem}: ${obj[elem]}`;
        if (elem !== last) description += "\n";
      }

  res.description = description;
  return res;
};