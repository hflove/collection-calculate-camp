'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var temp1 = [];
  for(var i = 0;i<collection_a.length;i++){
    var temp =0;
    for(var j = 0;j<collection_b.length;j++){
      if(collection_a[i] == collection_b[j]){
        temp1.push(collection_a[i]);
      }

    }
  }
  if(temp1.length == collection_b.length){
    return true;
  }
  else{
    return false;
  }
}

module.exports = compare_collections;


