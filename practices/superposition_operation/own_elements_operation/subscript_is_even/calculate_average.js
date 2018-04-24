'use strict';
var calculate_average = function(collection){
  var i = 1;
  var h = 0;
  var sum = 0;
   while(i<=collection.length){
     sum += collection[i];
     i = i+2;
     h++;
   }
   return sum / h;
};
module.exports = calculate_average;
