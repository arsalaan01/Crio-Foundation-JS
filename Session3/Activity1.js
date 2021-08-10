const todoDB = [];

function addTodo(item,priority){
  if(priority==='high'){
    todoDB.unshift(item);
  }else{
    todoDB.push(item);
  }
}

function clearTodo(index){
  todoDB[index] = null;
}

function updateTodo(index,newItem){
  todoDB[index] = newItem;
}

function getTodo(index){
  if(index !== undefined){
    return todoDB[index];
  }else {
    return todoDB;
  }
}

console.log(todoDB);
addTodo("dance","low");
addTodo("reading","high");
addTodo("coding","high");
console.log(todoDB);