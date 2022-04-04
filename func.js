//problem:1 Create one function with zero parameter having a console statement;
function name() {
    console.log("hai hello")
}
//problem:2 Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
function add(a,b) {
    return a+b;
}
add(3,4)

//problem:3 Create one arrow function
let arr = [2, 4, 6, 8]

let result = arr.every(item => item % 2 === 0)
console.log(result)

//problem:4
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
 output : undefined.

//problem:5
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
output : undefined and 21.

//problem : 6
// var x = 21;
// a();
// b();
// console.log(a);
// function a () {
    
//     var x = 20;
// console.log(x);
// };

// function b () {
    
//     var x = 40;
// console.log(x);
// };
output : 20 
 40
 ƒ a () {
var x = 20;
console.log(x);
}
//problem:7
// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    if (n < 0)
     return;
    if (n < 2)
     return 1;
    return n * factorial(n - 1);
  }
  factorial(5)
