// Basic functions
// Function Statement
function getName1(param){
   console.log(param);
}
getName1("CrioDo");

// functions can be treated as values also in JS.

// First Class Citizens in Javascript

// Function Expression/ Function Decalration
const name = function getName(param){
   console.log(param);
   console.log(getName);
}
// getName("CrioDo"); // ReferenceError: getName is not defined
name("Robin");





// High order Functions
function x(param){
  console.log("inside x");
  console.log(param);
  param();
}

// 1
function y(){
  console.log("inside y");
}

x(y); // function statement as an argument

//2
//Callback functions as an argument
x(function y1(){
  console.log("callback - y");
});

//3
const k = function y2(){
  console.log("function expression - y");
}
x(k); // function expression as an argument