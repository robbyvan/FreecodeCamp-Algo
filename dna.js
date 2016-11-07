function pair(str){
  var result = [];
  var targetArr = str.split("");
  for (var i = 0; i < targetArr.length; i++){
    var base;
    if (targetArr[i] === "C") {
      base = ["C","G"];
      result.push(base);
    }else if(targetArr[i] === "G"){
      base = ["G","C"];
      result.push(base);
    }else if (targetArr[i] === "A"){
      base = ["A","T"];
      result.push(base);
    }else if (targetArr[i] === "T"){
      base = ["T","A"];
      result.push(base);
    }
  }
  console.log(result);
  return result;
}
pair("GCG");