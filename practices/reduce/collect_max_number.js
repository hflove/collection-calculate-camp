'use strict';

function collect_max_number(collection) {
  //在这里写入代码
   var temp = 0
  for(var i = 0;i<collection.length;i++){
    if(temp < collection[i]){
      temp = collection[i];
    }
  }
  return temp;
}

module.exports = collect_max_number;
