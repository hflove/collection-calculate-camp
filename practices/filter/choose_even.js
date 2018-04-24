'use strict';

function choose_even(collection) {

  //在这里写入代码
  var collection_c = [];
  for(var i = 0;i<collection.length;i++){
    if(collection[i]%2 ==0){
      collection_c.push(collection[i]);
    }
  }
  return collection_c;
}

module.exports = choose_even;
