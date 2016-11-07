function diffArray(arr1, arr2){
  var newArr = [];

  for (var i = 0; i < arr1.length; i++){
    var elem = arr1[i];
    var index = arr2.indexOf(elem);
    while ( (elem !== undefined) && (index !== -1) ){
      arr1.splice(i, 1, undefined);
      arr2.splice(index, 1, undefined);
      index = arr2.indexOf(elem);
    }
  }

  arr1 = arr1.filter(function(val){
    return val !== undefined;
  });
  arr2 = arr2.filter(function(val){
    return val !== undefined;
  });

  newArr = newArr.concat(arr1);
  newArr = newArr.concat(arr2);
  // console.log(newArr);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);