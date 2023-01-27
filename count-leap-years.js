function countLeapYears(date) {
  let a = 1; // 0001 start year from task
  let datesince = new Date(a);
  let leapYears = 0;
  while (datesince.getFullYear() !== (date.getFullYear())) {
    leapYears += (new Date("02-29-" + datesince.getFullYear()).getMonth() === 1) ? 1 : 0;
    datesince.setFullYear(a++);
  }
  return leapYears;
}

// console.log(countLeapYears(new Date('0001-12-01')) === 0)
// console.log(countLeapYears(new Date('1664-08-09')) === 403)
// console.log(countLeapYears(new Date('2020-01-01')) === 489)
// console.log(countLeapYears(new Date('2048-12-08')) === 496)