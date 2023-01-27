function addWeeks(weeks, date) {
  weeks--;
  date.setDate(date.getDate() + weeks * 7);
  return date;
}
function firstDayWeek(week, datey) {

  let date = new Date(datey);
  console.log("date at beginning ", date)
  date = addWeeks(week, date);
  console.log("date after add weeks ", date)
  console.log("day", date.getDay()) // 0 is sunday, if it is zero, need to subtract 6 days instead of while loop subracrion
  if (+date === +new Date(datey)) {
    return formatDate(date);
  }
  let year = date;
  if (date.getDay() === 0) {
    date.setDate(date.getDate() - 6);
  }
  while (date.getDay() > 1) {
    date.setDate(date.getDate() - 1);
  }

  if (date.getYear() !== year.getYear()) {
    return formatDate(year);
  }
  return formatDate(date);
}
function formatDate(date) {
  let day, month, year;
  year = date.getFullYear();
  day = date.getDate();
  month = date.getMonth() + 1;
  if (date.getDate() < 10) {
    day = "0" + date.getDate();
  }
  if (month < 10) {
    month = "0" + (date.getMonth() + 1);
  }
  if (date.getFullYear() < 10) {
    year = "000" + year;
  } else if (date.getFullYear() < 100) {
    year = "00" + year;
  } else if (date.getFullYear() < 1000) {
    year = "0" + year;
  }
  console.log(day + "-" + month + "-" + year)
  return day + "-" + month + "-" + year;
}


// const eq = (a, b) => { console.log("need", b); return a == b }

// console.log(eq(firstDayWeek(1, '1000'), '01-01-1000'))
// console.log(eq(firstDayWeek(52, '1000'), '22-12-1000'))
// console.log(eq(firstDayWeek(2, '0001'), '08-01-0001'))
// console.log(eq(firstDayWeek(43, '1983'), '17-10-1983'))
// console.log(eq(firstDayWeek(23, '0091'), '04-06-0091'))
// console.log(eq(firstDayWeek(2, '2017'), '02-01-2017'))