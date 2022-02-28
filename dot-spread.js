const array = [45, 76, 89,12, 32]
console.log(array)
console.log(...array)

const max = Math.max(23,5454,665,23)
const maxArray = Math.max(array)
const maxArraydots = Math.max(...array)
console.log('maxArray:', maxArray)
console.log('max:', max)
console.log('maxdot:', maxArraydots)

// make a new array 
const numbers = [...array];
array.push(55);
console.log(numbers)
console.log(array)