function updateInventory(arr1, arr2){
  for (var i = 0; i < arr1.length; i++){
    var newItem = arr1[i];
    for (var j = 0; j < arr2.length; j++){
      var currItem = arr2[j];
      if (currItem[1] === newItem[1]) {
        currItem[0] += newItem[0];
        break;
      }
    }
    if (j >= arr2.length) {
      arr2.push(newItem);
    }
  }
  arr2.sort(function(item1, item2){
    if (item1[1] < item2[1]) {
      return -1;
    }else if(item1[1] > item2[1]){
      return 1;
    }else{
      return 0;
    }
  });
  console.log(arr2);
  return arr2;
}

// Example inventory lists
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);