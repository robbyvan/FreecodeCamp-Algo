function sumFibs(num){
  var queue = [1,1];
  var oddSum = 2;
  while(true){
    var next = queue[0] + queue[1];
    if (next <= num) {
      if (next % 2 !== 0) {
        oddSum += next;
      }
      queue.shift();
      queue.push(next);
    }else{
      break;
    }
  }
  console.log(oddSum);
  return oddSum;
}

sumFibs(75025);