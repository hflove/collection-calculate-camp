function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newArr = [];
  for(var i=0;i<collection_a.length;i++){
    var temp=collection_a[i];
    var count=0;
    for(var j=0;j<collection_a.length;j++){
      if(collection_a[j]==temp){
        count++;
        collection_a[j]=-1;
      }
    }
    if(temp != -1){
      var rel = {key:temp,count:count};
      newArr.push(rel);
    }
  }
  newArr.forEach(function (value){
    object_b.value.forEach(function (value1) {
      if(value.key == value1 && value.count>=3){
        var temp= parseInt(value.count / 3);
        value.count = value.count - temp;
      }
    });

  });
  return newArr;
}

module.exports = create_updated_collection;
