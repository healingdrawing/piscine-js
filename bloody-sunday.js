const oneDay = 1000 * 60 * 60 * 24;
const newCal = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date("0001-01-01");
const bloodySunday = (date) => newCal[Math.floor((date - d) / oneDay) % 6]

// console.log(bloodySunday(new Date('0001-01-01')) === 'Monday')
// console.log(bloodySunday(new Date('0001-01-02')) === 'Tuesday')
// console.log(bloodySunday(new Date('0001-01-03')) === 'Wednesday')
// console.log(bloodySunday(new Date('0001-01-04')) === 'Thursday')
// console.log(bloodySunday(new Date('0001-01-05')) === 'Friday')
// console.log(bloodySunday(new Date('0001-01-06')) === 'Saturday')
// console.log(bloodySunday(new Date('0001-01-07')) === 'Monday')
// console.log(bloodySunday(new Date('0001-12-01')) === 'Friday')
// console.log(bloodySunday(new Date('1664-08-09')) === 'Saturday')
// console.log(bloodySunday(new Date('2020-01-01')) === 'Monday')
// console.log(bloodySunday(new Date('2048-12-08')) === 'Thursday')