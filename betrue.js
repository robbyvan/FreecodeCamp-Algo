function truthCheck(collection, prop){
  for (var i = 0; i < collection.length; i++){
    if (collection[i].hasOwnProperty(prop) == false) {
      break;
    }
    if (!collection[i][prop]) {
      break;
    }
  }
  if (i < collection.length) {
    console.log(false);
    return false;
  }else{
    console.log(true);
    return true;
  }
}
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
