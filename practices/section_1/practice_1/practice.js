function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  var q = 0;
  var i = 0;
  var j = 0
  for( i = 0;i<collection_a.length;i++){
    for( j = 0;j<collection_b.length;j++){
      if(collection_a[i] == collection_b[j]){
        collection_c[q] = collection_a[i];
        q++;
      }
    }
  }
  return collection_c;
}

module.exports = collect_same_elements;
