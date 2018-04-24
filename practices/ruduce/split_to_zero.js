'use strict';
spilt_to_zero(0.8,0.2);
function spilt_to_zero(number, interval) {
  //在这里写入代码
  var collection = [];
  //var h = number;
  var temp;
  if(number % interval == 0){
    while(number > 0){
      temp = number.toFixed(1);
      collection.push(parseFloat(temp));
      number= number.toFixed(1) - interval.toFixed(1);
    }
    collection.push(0);
  }
  else if(number % interval !=0){
    while(number >= - interval){
      temp = number.toFixed(1);
      collection.push(parseFloat(temp));
      number= number.toFixed(1) - interval.toFixed(1);
    }
  }
  return collection;
}

module.exports = spilt_to_zero;
