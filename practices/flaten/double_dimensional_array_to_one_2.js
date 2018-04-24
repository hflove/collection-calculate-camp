'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_a = []
  var result = []
  collection_a =  [].concat.apply([],collection);
  for(var i=0;i<collection_a.length;i++){
    if(result.indexOf(collection_a[i])==-1){
      result.push(collection_a[i])}
  }
  return result;
}

module.exports = double_to_one;
