function findElement(arr, func){
  var num = 0;
  var newArr = [];
  newArr = arr.filter(function(val){
    return func(val);
  });
  console.log(newArr);
  if (newArr.length === 0) {
    return undefined;
  }else{
    return newArr[0];
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })