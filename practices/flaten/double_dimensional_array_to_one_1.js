'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_a = []
   collection_a =  [].concat.apply([],collection);
  return collection_a;
}

module.exports = double_to_one;
