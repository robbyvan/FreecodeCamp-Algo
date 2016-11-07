function convertToRoman(num){
  var numstring = num.toString();
  var reversNum = numstring.split("").reverse();
  console.log(reversNum);

  var romans = [];
  for (var i = 0; i < reversNum.length; i++){
    romans[i] = [];
  }
  romans[0] = ["I", "V", "X"];
  romans[1] = ["X", "L", "C"];
  romans[2] = ["C", "D", "M"];
  romans[3] = ["M", undefined, undefined];

  var result = [];
  for (var i = 0; i < reversNum.length; i++){
    result[i] = [];
  }

  //because only has 4 digit at most, we can do it by digit.
  //1st digit, 一定有
  for (var k = 0; k < reversNum.length; k++){
    if (parseInt(reversNum[k]) < 4){
      for (var i = 0; i < parseInt(reversNum[k]); i++){
        result[k].push(romans[k][0]);
      }
    }else if (parseInt(reversNum[k]) === 4){
      result[k].push(romans[k][0]);
      result[k].push(romans[k][1]);
    }else if (parseInt(reversNum[k]) < 9) {
      result[k].push(romans[k][1]);
      for (var i = 5; i < parseInt(reversNum[k]); i++){
        result[k].push(romans[k][0]);
      }
    }else{
      result[k].push(romans[k][0]);
      result[k].push(romans[k][2]);
    }
    console.log( (k+1) + "-th digit is: " + result[k].join(""));
  }
  var finalResult = [];
  for (var i = (reversNum.length - 1); i >= 0; i--){
    finalResult = finalResult.concat(result[i]);
  }
  console.log("Roman expression is: " + finalResult.join(""));
  return finalResult.join("");
}

convertToRoman(444);