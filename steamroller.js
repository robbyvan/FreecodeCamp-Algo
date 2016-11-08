function steamrollArray(array){
  var result = [];
  getResult(array);
  function getResult(arr){
    for (var i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i]) === false) {
        result.push(arr[i]);
      }else{
        getResult(arr[i]);
      }
    }
  }
  console.log(result);
  return result;
}


steamrollArray([1, [2], [3, [[4]]]])