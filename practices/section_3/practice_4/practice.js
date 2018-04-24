function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newArr = [];
  for(var i=0;i<collection_a.length;i++){
    var temp=collection_a[i];
    if(temp !== "d-5") {
      var count = 0;
      for (var j = 0; j < collection_a.length; j++) {
        if (collection_a[j] == temp) {
          count++;
          collection_a[j] = -1;
        }
      }
      if (temp != -1) {
        var rel = {key: temp, count: count};
        newArr.push(rel);
      }
    }
  }
  //alp = collection[collection.length-1].split("",1);
  number = "d-5".split("");
  var alp1 = number[0];
  number1 = parseInt(number[2]);
  re2 = {key:alp1,count:number1};
  newArr.push(re2);
  //console.log(newArr);

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
