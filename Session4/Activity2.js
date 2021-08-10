function findLongestWordLength(str){

  let strArr = str.split(" ");
  let largest = strArr[0].length;
  for(let i =0;i<strArr.length;i++){
    if(strArr[i].length > largest){
      largest = strArr[i].length;
    }
  }
  return largest;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));