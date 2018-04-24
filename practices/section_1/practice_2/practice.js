function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  var r= 0;
  for(var i = 0;i<collection_a.length;i++){
    for(var j = 0;j<collection_b[0].length;j++){
      // for(var q = 0;j<collection_b[j].length;q++){
        if(collection_a[i]==collection_b[0][j]){
          collection_c[r] = collection_a[i];
          r++;
        // }
      }
    }
  }
  return collection_c;
}

module.exports = collect_same_elements;
