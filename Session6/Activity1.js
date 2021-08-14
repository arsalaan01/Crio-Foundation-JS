function isPrime(num){
  let result = true;
  if(num === 0 || num === 1){
    return false;
  }
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i ===0){
      result = false;
      break;
    }
  }
  return result;
}

console.log(isPrime(10));
console.log(isPrime(7));

function printAllPrime(num1,num2){
  let arrOfPrimes=[];
  for(let i = num1;i<=num2;i++){
    if(isPrime(i)){
      arrOfPrimes.push(i);
    }
  }
  return arrOfPrimes;
}

 console.log(printAllPrime(20,50));

function sumOfAllPrimes(num){ //  // Time - O(num)
  let sum = 0;
  for(let i = 0; i <= num; i++){
    if(isPrime(i)){
      sum = sum+i;  
    }
    
  }
  return sum;
}

console.log(sumOfAllPrimes(20));
console.log(sumOfAllPrimes(10));