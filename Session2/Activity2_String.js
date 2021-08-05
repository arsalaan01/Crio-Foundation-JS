// escape sequences

//console.log('Let\'s go there');

// strings

/*
let str = "Arsalaan";
console.log(str);

str = 'Ali';
console.log(str);

str = "Arsalaan";
//str = ['A','r','s','a','l','a','a','n']
console.log(str[0]);
str[3]='N';
console.log(str);

const myName = 'Ali';
console.log(`My last name is ${myName}`);
*/
const firstName='Arsalaan';
const lastName='Ali';
let fullName =  firstName.concat(lastName);
console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);
let initials = firstName.charAt(0)+lastName.charAt(0)+fullName.charAt(0);
console.log(initials);

function getName(fName,lName){
  let fullName = '';
  fullName =  fName[0]+lName[0];
  return fullName;
}

console.log(getName('Nikhil','Tyagi'));