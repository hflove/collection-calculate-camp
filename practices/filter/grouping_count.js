'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var i = 0 ,j = 0 ,k = 0 ,m = 0 ;
  var result = {'1':0,'2':0,'3':0,'4':0};
  collection.forEach(function (value,index){
    if(value == 1){
      i++;
      result["1"] = i;
    }
    else if(value == 2){
      j++;
      result["2"] = j;
    }
    else if(value == 3){
      k++;
      result["3"] = k;
    }
    else if(value == 4){
      m++;
      result["4"] = m;
    }
  });
  return result;
}

module.exports = grouping_count;
