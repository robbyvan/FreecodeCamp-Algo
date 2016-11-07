function myReplace(str, before, after){
  var flag = /^[A-Z]/.test(before);
  var targetArr = str.split(" ");
  var index = targetArr.indexOf(before);
  while(index !== -1){
    if (flag) {
      var tmp = after.split("");
      tmp[0] = tmp[0].toUpperCase();
      after = tmp.join("");
    }else{
      after[0].toLowerCase();
    }
    targetArr.splice(index, 1, after);
    index = targetArr.indexOf(before);
  }
  var str = targetArr.join(" ");

  console.log(str);
  return str;
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")