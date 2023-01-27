// 01 edu , could you check your "masterpeaces" ( i have memory fail with 01 edu tests but , local version works ok, and requires 1 sec etc) before make this shit public?
// Or at least fix the description for the task. It is not a fun. Looks like you crap on people, because the situation allows to do this.


// // Javascript program to generate all unique
// // partitions of an integer

// // var sump = []; // to store final sequence/ array of partitions

// // Function to generate all unique
// // partitions of an integer
// function sums(n) {
//   let sump = []
//   // An array to store a partition
//   let p = new Array(n);

//   // Index of last element in a
//   // partition
//   let k = 0;

//   // Initialize first partition as
//   // number itself
//   p[k] = n;

//   // This loop first prints current
//   // partition, then generates next
//   // partition. The loop stops when
//   // the current partition has all 1s
//   while (true) {

//     // add current partition
//     let px = []
//     for (let i = 0; i < k + 1; i++) {
//       px.push(p[i])
//     }
//     sump.push(px.reverse())


//     // Generate next partition

//     // Find the rightmost non-one
//     // value in p[]. Also, update
//     // the rem_val so that we know
//     // how much value can be
//     // accommodated
//     let rem_val = 0;

//     while (k >= 0 && p[k] == 1) {
//       rem_val += p[k];
//       k--;
//     }

//     // If k < 0, all the values are 1 so
//     // there are no more partitions
//     if (k < 0)
//       return sump.reverse().slice(0, sump.length - 1);

//     // Decrease the p[k] found above
//     // and adjust the rem_val
//     p[k]--;
//     rem_val++;

//     // If rem_val is more, then the sorted
//     // order is violated. Divide rem_val in
//     // different values of size p[k] and copy
//     // these values at different positions
//     // after p[k]
//     while (rem_val > p[k]) {
//       p[k + 1] = p[k];
//       rem_val = rem_val - p[k];
//       k++;
//     }

//     // Copy rem_val to next position and
//     // increment position
//     p[k + 1] = rem_val;
//     k++;
//   }

// }

function reverse2(arr) {
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
  }
  return arr;
}

function sums(n) {
  return reverse2(rawsums(n).slice(1)) //.map((x) => x.reverse());
}

function rawsums(n, i = n, current = []) {
  if (n === 0) {
    return [current];
  }
  let result = [];
  for (let k = Math.min(i, n); k > 0; k--) {
    result = result.concat(rawsums(n - k, k, [...current, k]));
  }
  return result;
}

// console.log(sums(2));
// console.log(sums(3));
// console.log(sums(4));


// Create a function named sums that accepts a number and returns its partitions.

// A partition is a group of numbers, where the sum of the partition is equal to the number argument. Duplicate partitions are not allowed. [1, 2] and [2, 1] are considered duplicates. The array of partitions must be sorted.

// Example:

// sums(4) // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]
// memory fail with 01 edu tests but , local version works ok


// Javascript program to generate all unique partitions of an integer

// function printArray(p, n) {
//   let px = []
//   for (let i = 0; i < n; i++) {
//     px.push(p[i])
//   }
//   return px.reverse();
// }

// function sums(n) {
//   let partitions = new Set();
//   let sump = []

//   let p = new Array(n);
//   let k = 0;
//   p[k] = n;

//   while (true) {
//     let partition = printArray(p, k + 1);
//     if (!partitions.has(partition.toString())) {
//       partitions.add(partition.toString());
//       sump.push(partition)
//     }

//     let rem_val = 0;
//     while (k >= 0 && p[k] == 1) {
//       rem_val += p[k];
//       k--;
//     }

//     if (k < 0) return sump.reverse().slice(0, sump.length - 1);

//     p[k]--;
//     rem_val++;

//     while (rem_val > p[k]) {
//       p[k + 1] = p[k];
//       rem_val = rem_val - p[k];
//       k++;
//     }

//     p[k + 1] = rem_val;
//     k++;
//   }

// }

// console.log(sums(4));

// again shit with memory or node , but works ok locally