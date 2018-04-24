'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for (var i = 0; i < collection_a.length; i++) {
    collection_c.push(collection_a[i]);
  }
  for (var i = 0; i < collection_b.length; i++) {
    var j = collection_a.indexOf(collection_b[i]);
    if (j == -1) {
      collection_c.push(collection_b[i]);
    }
  }
  return collection_c;
}

module.exports = get_union;

