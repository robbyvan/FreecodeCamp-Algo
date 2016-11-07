function sumPrimes(num){
  var sum = 2;
  for (var m = 3; m <= num; m++){
    var k = Math.floor(Math.sqrt(m));
    for (var i = 2; i <= k; i++){
      if (m%i === 0) {
        break;
      }
    }
    if (i > k) {
      sum += m;
    }
  }
  console.log(sum);
  return sum;
}

sumprimes(10);