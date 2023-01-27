function getAcceleration(object) {
 // Your code here
 // check the object is not empty
 
 if (object.f && object.m) {// case a = F/m
    return object.f/object.m;
  }else if (object.Δv && object.Δt) {// case a = Δv/Δt
    return object.Δv/object.Δt;
  }else if (object.t && object.d) {// case a = 2d/t^2
    return 2*object.d/(object.t*object.t);
  }
  
  return 'impossible';
}

// Create a function named getAcceleration that calculates the velocity of a given object. For example:

// {
//   f: 10,
//   m: 5,
//   Δv: 100,
//   Δt: 50,
//   t:1,
//   d: 10
// }
// If its not possible to calculate it, it must return the string "impossible".

// Formulas

// a = F/m
// a = Δv/Δt
// a = 2d/t^2

// a = acceleration
// m = mass
// F = force
// Δv = final velocity - initial velocity
// Δt = final time - initial time
// d = distance
// t = time