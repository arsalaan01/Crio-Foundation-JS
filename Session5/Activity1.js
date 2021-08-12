/*
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.round(x)   //Returns x rounded to its nearest integer
Math.ceil(x)    //Returns x rounded up to its nearest integer
Math.floor(x)   //Returns x rounded down to its nearest integer
Math.pow(x, y)  //returns the value of x to the power of y
Math.sqrt(x)    //returns the square root of x
Math.abs(x)     //returns the absolute (positive) value of x

*/

function reverse(num){
  let revNum=0;
  let temp = 0;
  while(num>0){
    temp = parseInt(num%10);
    revNum = revNum *10 + temp;
    num = parseInt(num/10);
  }
  return revNum;
}
//reverse(-50123);
console.log(reverse(-1523));
