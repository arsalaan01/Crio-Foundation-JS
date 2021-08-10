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

function insertTodo(){
  todoDB.splice(index,0,item);
}

function removeTodo(index){
  todoDB.splice(index,1);
}