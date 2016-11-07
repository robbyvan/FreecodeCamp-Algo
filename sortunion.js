function uniteUnique(arr){
  var arr = arguments[0];
  for (var i = 1; i < arguments.length; i++){
    var current = arguments[i];
    for (var j = 0; j < current.length; j++){
      var elem = current[j];
      if (arr.indexOf(elem) !== -1 && elem !== undefined) {
        current.splice(j, 1, undefined);
      }
    }
    current = current.filter(function(val){
      return val !== undefined;
    });
    arr = arr.concat(current);
  }
  console.log(arr);
  return arr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);