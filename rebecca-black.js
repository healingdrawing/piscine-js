const isFriday = (date) => date.getDay() === 5;

const isWeekend = (date) => [0, 6].includes(date.getDay());

const isLeapYear = (date) => new Date("02-29-" + date.getFullYear()).getMonth() === 1; // 1 is february

const isLastDayOfMonth = (date) => {
  const d = new Date(date)
  d.setDate(date.getDate() + 1)
  return d.getMonth() !== date.getMonth();
}
