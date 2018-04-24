'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var collection_c = [];
  for(var i = 0;i<collection.length;i++){
    if(collection_c.indexOf(collection[i]) == -1){
      collection_c.push(collection[i]);

    }
  }
  return collection_c;
}

module.exports = choose_no_repeat_number;
