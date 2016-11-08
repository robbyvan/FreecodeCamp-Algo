function addTogether(){
  for (var i = 0; i < arguments.length; i++){
    if (typeof arguments[i] !== 'number') {
      return undefined;
    }
  }
  var num1 = arguments[0];
  if (arguments.length === 2) {
    return (num1 + arguments[1]);
  }else if(arguments.length === 1){
    return function(num2){
      if (typeof num2 !== 'number') {
        return undefined;
      }else{
        return (num1 + num2);
      }
    }
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(2));