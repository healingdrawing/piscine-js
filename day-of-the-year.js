const dayOfTheYear = (date) => {
  let days = 1;
  const datesince = new Date();
  datesince.setFullYear(date.getFullYear(), 0, days);
  while (date > datesince) {
    datesince.setDate(datesince.getDate() + 1);
    days++;
  }
  return days;
}

// console.log(dayOfTheYear(new Date('0001-01-01')) === 1)
// console.log(dayOfTheYear(new Date('1664-08-09')) === 222)
// console.log(dayOfTheYear(new Date('1600-12-31')) === 366)
// console.log(dayOfTheYear(new Date('2020-06-22')) === 174)
// console.log(dayOfTheYear(new Date('2048-12-08')) === 343)
// console.log(dayOfTheYear(new Date('2048-11-08')) === 313)