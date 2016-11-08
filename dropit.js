function dropElements(arr, func){
  for (var i = 0; i < arr.length; ){
    if (func(arr[0]) === false) {
      arr.shift();
    }else{
      break;
    }
  }
  console.log(arr);
  return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;})