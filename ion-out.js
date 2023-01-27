const ionOut = str => str.match(/\w+/g).filter(e => e.slice(-4) === 'tion').map(e => e.replace("tion", "t"));

// Create a function named ionOut, that receives a string and returns an array with every word containing 'ion' following a 't'. The words should be returned without the 'ion' part.

// console.log(ionOut('attention, direction')); // output: ['attent', 'direct']