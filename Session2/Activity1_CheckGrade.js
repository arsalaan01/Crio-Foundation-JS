// Calculate the grade if the marks are given

/* 0-40 - Fail
41-60 - C
61 - 80 B
81- 100 A */

// let marks = ?;

//Calculate Grade

function checkGrades(marks) {
  
  if(marks>=81 && marks <= 100){
    console.log("A");
  } else if(marks>=61 && marks <= 80){
    console.log("B");
  } else if(marks>=41 && marks <= 60){
    console.log("C");
  } else {
    console.log("Fail");
  }
}

checkGrades(39);
checkGrades(68);
checkGrades(85);

