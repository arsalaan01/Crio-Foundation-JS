const matrix = [[0,1,2,3],
             [4,5,6,7],
             [8,9,10,11],
             [12,13,14,15]];

function transpose(arr){
let trans=[];
for(var i = 0; i < arr.length; i++){
        trans.push([]);
    };
for(let i =0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    trans[j].push(arr[i][j]);
  }
  }

  return trans;
}

function printMatrix(trans){
  for(let i =0;i<trans.length;i++){
  for(let j=0;j<trans[i].length;j++){
    console.log(trans[i][j]);
  }
}
}
printMatrix(transpose(matrix));