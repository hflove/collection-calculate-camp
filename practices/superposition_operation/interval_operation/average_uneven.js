'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var temp = 0;
  for(var i = 0;i<collection.length;i++){
    if(collection[i] % 2 != 0 && collection[i] > 0 && collection[i] <= 10){
      sum += collection[i];
      temp ++;
    }
  }
  var avg = sum / temp;
  return avg;

}

module.exports = average_uneven;
