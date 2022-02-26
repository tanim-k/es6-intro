// arrow function 
// 1
const add = (num1, num2) => num1+num2;
const sum = add(22, 44)
console.log('add:', sum)
// 2
const multiply = (num1, num2, num3) => num1+num2+num3;
const result = multiply(22, 4, 4)
console.log('multiply:', result);
// 3
const fiveTimes = num => num*5;
const output = fiveTimes(4);
console.log('5times:', output);
// 4
const tenTimes = (num) => num*10;
const value10 = tenTimes(22);
console.log('tentimes:', value10);
// parameter less arrow funtion 5
const getName = () => 'mrle cocpit';
const name = getName()
console.log(name);
// multyline operations big arrow 6
const doMath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    const out = result * 5;
    return out;
}
const total = doMath(3, 2);
console.log(total);
const total1 = doMath(31, 22);
console.log(total1);
// arrow fn use in add event listener : just know it how to use it:::
document.getElementById('tumi-valo').addEventListener(event => {
    // multyline operations
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    const out = result * 5;
    return out;
})