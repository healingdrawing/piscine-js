function split(string, separator) {
  let arr = [];
  if (separator != ""){let seplena = separator.length;
    while (string.indexOf(separator)>-1){
      let si = string.indexOf(separator)
      arr.push(string.slice(0,si)) // add word
      string = string.slice(si+seplena)
    }
    arr.push(string)
  }else{
    for (let i = 0; i < string.length; i++) {
      arr.push(string[i])
    }
  }

  return arr;
}

function join(array, separator) {
  var string = '';
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      string += array[i];
    }else{
      string += array[i] + separator;
    }
  }
  return string;
}

// console.log(split('a - b - c', ' - ')); // ['a', 'b', 'c']
// console.log(join(['a', 'b', 'c'], ' - ')); // 'a - b - c'
// console.log(split('Riad', '')) //, ['R', 'i', 'a', 'd'])

// Implement 2 functions:

// split that works like String.split, but takes the string as its first argument.

// join that works like Array.join, but take the array as its first argument.