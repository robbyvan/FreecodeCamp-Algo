function sym(){
  result = arguments[0];
  result = result.filter(function(val, index){
    return result.indexOf(val) === index;
  });
  // result.concat(arguments[0]);
  for (var i = 1; i < arguments.length; i++){
    var current = arguments[i];
    current = current.filter(function(val, index){
      return current.indexOf(val) === index;
    });
    for (var j = 0; j < current.length; j++){
      if (current[j] === undefined) {
        continue;
      }
      var check = current[j];
      result = result.map(function(val){
        if (val === check) {
          val = undefined;
          current = current.map(function(val){
            return val === check? undefined: val;
          });
        }
        return val;
      });
    }
    result = result.filter(function(val){return val !== undefined});
    current = current.filter(function(val){return val !== undefined});
    result = result.concat(current);
  }
  console.log(result);
  return result;
}
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])