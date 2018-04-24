'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var temp = [];
  var a;
  for(var i = 0;i<collection.length;i++){
    if(collection[i] % 2 != 0) {
      console.log(collection[i]);
      a = collection[i] * 3 + 2;
      temp.push(a);
    }
  }
  return temp;
}

module.exports = hybrid_operation_to_uneven;

