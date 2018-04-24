'use strict';
var even_group_calculate_average = function(collection){
  var temp1 = [];
  var temp2 = [];
  var temp3 = [];
  var temp = [temp1,temp2,temp3];
  var result = [];
  var  h = 0;
  var i = 1;
  var sum = 0;
  while(i < collection.length){
    if(collection[i] < 10 && collection[i] %2 ==0) {
      temp1.push(collection[i]);
    }
    else if(collection[i]>= 10 && collection[i] <100 && collection[i] %2 ==0){
      temp2.push(collection[i]);
    }
    else if(collection[i] < 1000 && collection[i] >= 100 && collection[i] % 2 == 0){
      temp3.push(collection[i]);
    }
    i = i+2;
  }
  var num=0;
  for(var i = 0;i<3;i++) {
    var sum = 0;
    var h = 0;
    temp[i].forEach(function (value) {
      sum += value;
      h++;
    });
    var avg = sum / h;
    if(sum != 0){
      result.push(avg);
      num++;
    }
  }
  if(num==0)
    result=[0];
  return result;
};
module.exports = even_group_calculate_average;
