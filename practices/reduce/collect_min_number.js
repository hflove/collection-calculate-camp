'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var temp = collection[0];
  for(var i = 0;i<collection.length;i++){
    if( temp > collection[i+1]){
      temp = collection[i+1];
    }
  }
  return temp;

}

module.exports = collect_min_number;

