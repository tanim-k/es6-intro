// let const 1:
let person ='kulsum begun'
person = 'madari lord';
const furfura = 'furfura pir'
// default parameters 2:
const getName = (first, last='bokachu') => {
    return first + ' ' + last;
}
getName('fardin');
console.log(getName('fardin'));
// template string 3::
const myPeople = `my lovely pis is ${furfura}. my lovely friend is ${person}.my another friend is ${getName('nihari')}. she is horny.`
console.log(myPeople);

// arrow fn 
const fiveTimes = x => x*5;
const fiveNoPara = () => 5;
const fiveTwoPara = (p, q) => p-q;
// big complex arrow fn
const bigArrow = (x,y,z) => {
    const first = x+y;
    const second = x-y;
    const third = y*z
    const result = (first*second)/third;
    return result;
}
// fn calling
console.log(bigArrow(3,8,67));
// array and min max 4:
const nums =[2,4,6,10];
// const min = Math.min(nums) dile hobe na
const min = Math.min(...nums);
console.log(min)