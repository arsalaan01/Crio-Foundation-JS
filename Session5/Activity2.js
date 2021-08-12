const array = [
  {
    name: "Arnold",
    age: 25,
  },
  {
    name: "Tim",
    age: 6,
  },
  {
    name: "Sheila",
    age: 56,
  },
  {
    name: "Zack",
    age: 32,
  },
  {
    name: "Tom",
    age: 82,
  },
];

function sortArrayObj(arr){
  let sortedArr =[];
  for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length-i-1;j++){
      if(arr[i].age < arr[j+1].age){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j+1] = temp;
      }
    }
    sortedArr.unshift(arr[arr.length-1-i]); 
  }
  return sortedArr; 
}

console.log(sortArrayObj(array));