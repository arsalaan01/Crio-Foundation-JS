function largestOfFour(arr) {
  const resulttantArr = [];
  for(let i=0; i < arr.length; i++){ // 4 times
    let largestNum = arr[i][0]; // 4, 5
    for(let j=0; j < arr[i].length; j++){ // 4 times
      if(arr[i][j] > largestNum){
        largestNum = arr[i][j];
      }
    }
  resulttantArr.push(largestNum);
  }
  return resulttantArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));