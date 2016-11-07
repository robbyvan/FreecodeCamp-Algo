//Object.getOwnPropertyNames(obj)
//xxx.hasOwnProperty(prop);
function where(collection, source){
  var arr = [];
  var srcProps = Object.getOwnPropertyNames(source);
  console.log(srcProps);
  for (var i = 0; i < collection.length; i++){
    var currentObj = collection[i];
    var flag = true;
    for (var j = 0; j < srcProps.length; j++){
      var checkProp = srcProps[j];
      if (!currentObj.hasOwnProperty(checkProp)) {
        flag = false;
      }else if(currentObj[checkProp] !== source[checkProp]) {
        flag = false;
      }
    }
    if (flag) {
      arr.push(currentObj);
    }
  }
  console.log(arr);
  return arr;
}
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//   for (var i = 0; i < srcProps.length; i++){
//     var flag = true;
//     var checkProp = srcProps[i];
//     for (var j = 0; j < collection.length; j ++){
//       if (collection[j].hasOwnProperty(checkProp)) {
//         if (collection[j][checkProp] === source[checkProp]) {
//           arr.push(collection[j]);
//         }else {
//           flag = false;
//         }
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }

