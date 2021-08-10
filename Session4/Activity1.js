let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3][0][1];

  console.log(arr);

  const matrix =[[1,4,6],[2,5,7],[3,4,3]];

  const str = "My country is India";
  console.log(str.split(" "));
  console.log(str.split(""));

const arr1 = [ 'My', 'country', 'is', 'India' ];
console.log(arr1.join(" "));

function reverseString(str){

  //return str.split("").reverse().join("");
  let result = '';
  let arr = str.split("");
  let reverseArr = arr.reverse();
  result = reverseArr.join("");
  return result;
}

console.log(reverseString("hello"));
console.log(reverseString("I love my country"));
























