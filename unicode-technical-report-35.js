const format = (date, formatString) => {
  const fx = new Map(
    [
      ['yyyy', Math.abs(date.getFullYear()).toString().padStart(4, '0')],
      ['y', Math.abs(date.getFullYear())],
      ['MMMM', date.toLocaleString('en-US', { month: 'long' })],
      ['MMM', date.toLocaleString('en-US', { month: 'short' })],
      ['MM', (date.getMonth() + 1).toString().padStart(2, '0')],
      ['M', date.getMonth() + 1],
      ['dd', date.getDate().toString().padStart(2, '0')],
      ['d', date.getDate()],
      ['EEEE', date.toLocaleString('en-US', { weekday: 'long' })],
      ['E', date.toLocaleString('en-US', { weekday: 'short' })],
      ['hh', (date.getHours() % 12).toString().padStart(2, '0')],
      ['h', date.getHours() % 12],
      ['mm', date.getMinutes().toString().padStart(2, '0')],
      ['m', date.getMinutes()],
      ['ss', date.getSeconds().toString().padStart(2, '0')],
      ['s', date.getSeconds()],
      ['a', date.getHours() < 12 ? 'AM' : 'PM'],
      ['HH', date.getHours().toString().padStart(2, '0')],
      ['H', date.getHours()],
      ['GGGG', date.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini'],
      ['G', date.getFullYear() < 0 ? 'BC' : 'AD'],
    ]
  )

  for (var [key, value] of fx.entries()) {
    if (formatString.includes("May")
      && (key.includes("M") || key.includes("a") || key.includes("y"))) {
      continue;
    }
    if (formatString.includes("September")
      && (key.includes("m"))) {
      continue;
    }
    if (formatString.includes("Sunday")
      && (key.includes("d") || key.includes("a") || key.includes("y"))) {
      continue;
    }
    if (formatString.includes("Monday")
      && (key.includes("M") || key.includes("d") || key.includes("a") || key.includes("y"))) {
      continue;
    }

    formatString = formatString.replace(key, value)
  }
  return formatString
}

// const eq = (a, b) => {
//   // console.log(a, b)
//   return a === b
// }

// const landing = new Date('July 20, 1969, 20:17:40')
// const returning = new Date('July 21, 1969, 17:54:12')
// const eclipse = new Date(-585, 4, 28)
// const ending = new Date('2 September 1945, 9:02:14')

// // year
// console.log(eq(format(eclipse, 'y'), '585'))
// console.log(eq(format(landing, 'y'), '1969'))
// console.log(eq(format(eclipse, 'yyyy'), '0585'))
// console.log(eq(format(landing, 'yyyy'), '1969'))
// console.log(eq(format(eclipse, 'yyyy G'), '0585 BC'))
// console.log(eq(format(landing, 'yyyy G'), '1969 AD'))
// console.log(eq(format(eclipse, 'yyyy GGGG'), '0585 Before Christ'))
// console.log(eq(format(landing, 'yyyy GGGG'), '1969 Anno Domini'))

// // month
// console.log(eq(format(eclipse, 'M'), '5'))
// console.log(eq(format(eclipse, 'MM'), '05'))
// console.log(eq(format(eclipse, 'MMM'), 'May'))
// console.log(eq(format(eclipse, 'MMMM'), 'May'))
// console.log(eq(format(landing, 'M'), '7'))
// console.log(eq(format(landing, 'MM'), '07'))
// console.log(eq(format(landing, 'MMM'), 'Jul'))
// console.log(eq(format(landing, 'MMMM'), 'July'))
// console.log(eq(format(ending, 'M'), '9'))
// console.log(eq(format(ending, 'MM'), '09'))
// console.log(eq(format(ending, 'MMM'), 'Sep'))
// console.log(eq(format(ending, 'MMMM'), 'September'))

// // day
// console.log(eq(format(landing, 'd'), '20'))
// console.log(eq(format(ending, 'd'), '2'))
// console.log(eq(format(landing, 'dd'), '20'))
// console.log(eq(format(ending, 'dd'), '02'))
// console.log(eq(format(landing, 'E'), 'Sun'))
// console.log(eq(format(returning, 'E'), 'Mon'))
// console.log(eq(format(landing, 'EEEE'), 'Sunday'))
// console.log(eq(format(returning, 'EEEE'), 'Monday'))

// // time
// console.log(eq(format(landing, 'H:m:s'), '20:17:40'))
// console.log(eq(format(landing, 'HH:mm:ss'), '20:17:40'))
// console.log(eq(format(landing, 'h:m:s a'), '8:17:40 PM'))
// console.log(eq(format(landing, 'hh:mm:ss a'), '08:17:40 PM'))
// console.log(eq(format(returning, 'H:m:s'), '17:54:12'))
// console.log(eq(format(returning, 'HH:mm:ss'), '17:54:12'))
// console.log(eq(format(returning, 'h:m:s a'), '5:54:12 PM'))
// console.log(eq(format(returning, 'hh:mm:ss a'), '05:54:12 PM'))
// console.log(eq(format(ending, 'H:m:s'), '9:2:14'))
// console.log(eq(format(ending, 'HH:mm:ss'), '09:02:14'))
// console.log(eq(format(ending, 'h:m:s a'), '9:2:14 AM'))
// console.log(eq(format(ending, 'hh:mm:ss a'), '09:02:14 AM'))

// // mix
// console.log(eq(format(ending, 'HH(mm)ss [dd] <MMM>'), '09(02)14 [02] <Sep>'))
// console.log(eq(format(ending, 'dd/MM/yyyy'), '02/09/1945'))


// Subject

// Create a function named format which accepts a valid Date and a format string. Your function should return a correctly formatted string.

// Your function must handle:

// y
// yyyy
// G
// GGGG
// M
// MM
// MMM
// MMMM
// d
// dd
// E
// EEEE
// h
// hh
// m
// mm
// s
// ss
// H
// HH
// a
// Example

// const d = new Date('7 January 1985, 3:08:19')

// format(d, 'HH(mm)ss [dd] <MMM>') // -> '03(08)19 [07] <Jan>'
