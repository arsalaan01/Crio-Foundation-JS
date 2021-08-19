const numbers = [55, 56, 89, 70, 12];
console.log(Math.max(...numbers)); //Math.max(55, 56, 89, 70, 12)

const numbersCopy = [...numbers]
console.log(numbersCopy);


const employeeData = {
  John: 10000,
  Pete: 30000,
};
const employeeDataCopy = {...employeeData}
console.log(employeeDataCopy);

function myFun(a, b, ...manyMoreArgs) {
 console.log("a", a);
 console.log("b", b);
 console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");

function xyz(x, y, ...z) {
 console.log(x, " ", y); // hey hello
 console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
 console.log(z[0]); // wassup
 console.log(z.length); // 4
}
xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");

//const [a, b] = [10, 20]; //a = 10, b = 20
function f() {
  return [1, 2, 3];
}
const [a, , b] = f();

const obj = { a1: 10, b1: 20 };
const { a1, b1 } = obj; //unpacking obj properties
console.log(a1 + "    " + b1)
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log("--------");
console.log(foo + "    " + bar);



