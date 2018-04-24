function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  var q = 0;
  for(var i = 0;i<collection_a.length;i++){
    for(var j = 0;j< object_b.value.length;j++){
      if(collection_a[i] == object_b.value[j]){
        collection_c[q] = collection_a[i];
        q++;
      }
    }
  }
  return collection_c;
}

module.exports = collect_same_elements;
