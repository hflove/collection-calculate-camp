'use strict';

function amount_even(collection) {

  //在这里写入代码
  var sum = 0;
  for(var i = 0;i<collection.length;i++){
    if(collection[i] % 2 == 0 && collection[i] > 0 && collection[i] <= 10){
       sum += collection[i];
    }
  }
  return sum;
}

module.exports = amount_even;
