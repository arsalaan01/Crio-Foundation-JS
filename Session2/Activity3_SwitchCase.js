// If `val` is `1`, or `A` or `a` → `alpha`
// `2`, `B`, or `b` → `beta`
// `3`, `C`, or `c` → `gamma`
// `4`, `D`, or `d` → `delta`
// `default` → `null`
//---
//let answer = "";
//write switch-case construct here

// switch case

let val = '1';
let answer = "";
switch(val){
  case '1':
  answer='alpha';
  break;
  case '2':
  answer='beta';
  break;
  case '3':
  answer='gamma';
  break;
  case '4':
  answer='delta';
  break;
  default:
  answer='null';
}
console.log(answer);