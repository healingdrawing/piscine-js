const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

const clone1 = JSON.parse(JSON.stringify(person));
const clone2 = JSON.parse(JSON.stringify(person));
const samePerson = person
person.age += 1
person.country = 'FR'


// Create three copies of the person object named clone1, clone2 and samePerson.

// Increase the age of person by one, and set its country to 'FR'.

// You must find a way to keep the original values of clone1 and clone2. The values of samePerson should change when person is changed.