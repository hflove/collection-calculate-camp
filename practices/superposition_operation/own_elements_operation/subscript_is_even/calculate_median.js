'use strict';
var calculate_median = function(collection){
  var temp = 0;
  //var collection_a = [];
  for(var i = 0;i< collection.length;i++){
    if(collection[i] % 2 == 0){
      temp += 1;
    }
  }
  if(temp % 2 != 0){
    return collection[collection.length / 2];
  }
  else{
    return collection[parseInt(collection.length / 2 )];
  }
};
module.exports = calculate_median;
