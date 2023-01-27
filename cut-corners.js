function round(num){
  let res = 0
  let neg = false
  if (num < 0){
      num = -num
      neg = true
  }
//   return Math.round(num)
  while (num > 1){
      res++
      num--
  }
//    console.log(modulo(num,1))
  if (num > 0.5){
      res++
  }
  if (neg){
      res = -res
  }
  return res
}

//function that Returns the smallest integer greater than or equal to x.
function ceil(num){
  let res = 0
  let neg = false
  if (num < 0){
      num = -num
      neg = true
  }
  while (num > 0){
      res++
      num--
  }
  if (neg){
      res = -res
      res++
  }
  return res
}

//function that Returns the largest integer less than or equal to x
function floor(num){
  let res = 0
  let neg = false
  if (num < 0){
      num = -num
      neg = true
  }
  while (num > 1){
      res++
      num--
  }
  if (neg){
      res = -res
      res--
  }
  return res
}

// function that Returns the integer portion of x, removing any fractional digits.
function trunc(num){
  let temp = 0 //floor(num)
  let neg = false
  if (num < 0){
      num = -num
      neg = true
  }
  while (num > 1000000000){
      temp += 1000000000
      num -= 1000000000
  }
  while (num > 1000000){
      temp += 1000000
      num -= 1000000
  }
  while (num > 1){
      temp++
      num--
  }
  if (neg){
      temp = -temp
  }
  return temp
}
// interesting solution from Malin
