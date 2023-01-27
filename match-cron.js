const aux = (val, str) => str == "*" || val == str;

const matchCron = (str, date) => {
  const arr = str.split(" ");
  return arr.length == 5
    && aux(date.getMinutes(), arr[0])
    && aux(date.getHours(), arr[1])
    && aux(date.getDate(), arr[2])
    && aux(date.getMonth() + 1, arr[3])
    && aux(date.getDay(), arr[4]);
}