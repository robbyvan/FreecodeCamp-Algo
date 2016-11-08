function makeFriendlyDates(arr){
  var date = [];
  date.push(arr[0]);
  if (arr[2] != arr[1]) {
    date.push(arr[1]);
    if (date[0] > date[1]) {

    var tmp = date[0];
    date[0] = date[1];
    date[1] = tmp;
  }
  date[0] = date[0].split("-");
  date[1] = date[1].split("-");

  var showYear1 = true;
  var showYear2 = true;
  var showMonth = true;


  if (date[0][0] === date[1][0]) {
      showYear2 = false;
      if (date[1][1] === date[0][1]) {
        showMonth = false;
      }
      if (date[0][0] == "2016") {
        showYear1 = false;
      }
    }else if(parseInt(date[1][0]) - parseInt(date[0][0]) == 1){
      if(date[1][1] < date[0][1]){
        showYear2 = false;
        if (date[0][0] == "2016") {
          showYear1 = false;
        }
      }else if(date[1][1] === date[0][1]){
        if(date[1][2] < date[0][2]){
          showYear2 = false;
        }
      }
    }
  }
  
  var result = [];
  for (var i = 0; i < date.length; i ++){
    var months = ["January", "February", "March", "April", "May", "June", "July", " August", "September", "October", "November", "December"];
    var month = months[parseInt(date[i][1]) - 1];
    var day = parseInt(date[i][2]).toString();
    if(day == "1"){
      day += "st";
    }else if(day == 2){
      day += "nd";
    }else if(day == 3){
      day += "rd";
    }else{
      day += "th";
    }
    //show
    var str = "";
    if (i === 0) {
      str = month + " " + day;
      if (showYear1) {
        str = str + ", " + date[0][0];
      }
      result.push(str);
    }else if (i === 1) {
      if (showMonth) {
        str = str + month + " ";
      }
      str += day;
      if (showYear2) {
        str = str + ", " + date[1][0];
      }
      if (arr[1] !== arr[0]){
        result.push(str);
      }
      
    }
  }
  console.log(result);
  return result;
}
// makeFriendlyDates(["2022-09-05", "2023-09-05"]);