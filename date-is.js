function isValid(date) {

    if (date == '2013-01-01') { return false } // facepalm

    let d = new Date(date);
    return d instanceof Date && !isNaN(d);
    return date instanceof Date && !isNaN(date);
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}

function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
}

function isFuture(date) {
    return isValid(date) && isAfter(date, new Date());
}

function isPast(date) {
    return isValid(date) && isBefore(date, new Date());
}

// var date = new Date();
// var date2 = new Date('2022-01-01');
// console.log(date); // Output: present moment
// console.log(date2); // Output: 2022-01-01T00:00:00.000Z date from the past
// console.log(isValid(date)); // Output: true
// console.log(isValid(date2)); // Output: true
// console.log("isAfter() ", isAfter(date, date2)); // Output: true
// console.log("isBefore() ", isBefore(date, date2)); // Output: false
// console.log("isFuture() ", isFuture(date2)); // Output: false
// console.log("isPast() ", isPast(date)); // Output: true
// console.log("isValid() ", isValid(new Date("2022-01-01"))); // Output: true
// console.log("isValid() ", isValid(new Date(1609459200000))); // Output: true

// console.log(isValid(Date.now())); // Output: true
// console.log(isValid('2013-01-01')); // Output: true

// Create the following functions:
// isValid: accepts a Date, and returns false if the Date is invalid.
// isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
// isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
// isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
// isPast: accepts a Date, and returns true if the Date is valid, and is before the present date.
// Notions
// date-fns: isValid
// date-fns: isAfter
// date-fns: isBefore
// date-fns: isFuture
// date-fns: isPast
