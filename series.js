// const series = async (tasks) => {
//   const result = []
//   for (let i = 0; i < tasks.length; i++) {
//     result[i] = await tasks[i]();
//   }
//   return result;
// }
// pass local tests but fail online tests

const series = async (tasks) => {
  const result = [];
  let i = 0;
  while (i < tasks.length) {
    result[i] = await tasks[i]();
    i++;
  }
  return result;
}


// Instructions

// Create a function named series that takes an array of async functions.It must execute them in series and return the results in order.

//   Notions

// Promise