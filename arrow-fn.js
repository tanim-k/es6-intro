// function declare
function add(num1, num2){
    return num1 + num2;
}
// variable with 
const add2 = function add2(num1 ,num2) {
    return num1 + num2
}
const add3 = function(num1 ,num2) {
    return num1 + num2
}
// arrow function 
const add4 = (num1, num2) => num1 + num2;
const sum3 = add3(30,70);
const sum4 = add4(70,70);
console.log(sum3);
console.log(sum4);
const sum2 = add2(30,60);
console.log(sum2);
const sum1 = add(20, 30);
console.log(sum1);
//  document.getElementById('my-btn').onclick = function hsndleEvent(){

//  }