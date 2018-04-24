function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.forEach(function (value){
    object_b.value.forEach(function (value1) {
      if(value.key == value1 && value.count>=3){
        var temp= parseInt(value.count / 3);
        value.count = value.count - temp;
      }
    });

  });
  return collection_a;
}

module.exports = create_updated_collection;
