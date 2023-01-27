// to execute in vscode on mac os run the following command in the terminal
// ./node_modules/.bin/tsc dr-strange.ts && node dr-strange.js

function addWeek(date: Date): string {
  // get the number of days since the epoch
  const daysSinceEpoch = Math.floor((date.getTime() - new Date('0001-01-01').getTime()) / (1000 * 60 * 60 * 24));
  // calculate the day of the 14-day week
  const weekDay = daysSinceEpoch % 14;
  // map the day of the week to a string
  const weekDayString = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'][weekDay];
  // return the string
  return weekDayString;
}

interface TimeTravelOptions {
  date: Date;
  hour: number;
  minute: number;
  second: number;
}

function timeTravel(options: TimeTravelOptions): Date {
  // create a new date object with the original date
  let newDate = new Date(options.date);
  // set the hour, minute, and second
  newDate.setHours(options.hour);
  newDate.setMinutes(options.minute);
  newDate.setSeconds(options.second);
  // return the new date
  return newDate;
}


// Instructions

// You will create two functions: addWeek and timeTravel.

// You have been given a mission to create a new sense of time. Normally a week has 7 days right? Well, that is about to change.

// Weeks will instead have 14 days.

// Let me explain; this new week will have 14 days, from Monday to Sunday, then secondMonday to secondSunday.

// Your purpose is to create a new function named addWeek, that takes a Date as an argument. Your function should return the weekday as a string, according to our new 14-day week format. The epoch of our new 14-day week is 0001-01-01, and that was a Monday.

// What is an epoch?

// Now imagine you have an appointment with your doctor, and you have to wait for some hours, but you do not want to wait. So you decide that you need to create a new function named timeTravel, that allows you to change the time according to your needs.

// Your function will take an object as an argument, and return a Date. You can see the timeTravel example below to understand the structure of the object argument.

// Your objective is to use the information from the object to modify the time of the Date before returning it.

// Example

console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday

// timeTravel({ date, hour, minute, second })

console.log(timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString())

// // Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
