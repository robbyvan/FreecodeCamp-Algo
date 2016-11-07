function fearNotLetter(str){
  var origin = str.split("");
  var missings = [];

  for (var i = 0; i < (origin.length - 1); i++){
    var currentVal = origin[i].charCodeAt(0);
    var nextVal = origin[i+1].charCodeAt(0);
    if (currentVal+1 !== nextVal) {
      var miss = String.fromCharCode(currentVal+1);
      origin.splice(i+1, 0, miss);
      missings.push(miss);
    }
  }

  console.log(missings);
  if (missings.length === 0) {
    return undefined;
  }else{
    return missings.join("");
  }
}
fearNotLetter("ABCD");