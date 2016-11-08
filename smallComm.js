function biggest(num1, num2){
  var temp;
  if (num2 > num1) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
  while (num1 % num2 !== 0){
    temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num2;
}

function smallestCommons(arr) {
  if (arr[0] < arr[1]) {
    var min = arr[0];
    var max = arr[1];
  }else{
    var min = arr[1];
    var max = arr[0];
  }
  var common = min;
  for (var curr = min+1; curr <= max; curr++){
    var divide = biggest(common, curr);
    common = common * curr / divide;
  }
  console.log(common);
  return common;
}


smallestCommons([13,1]);