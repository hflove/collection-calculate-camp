function count_same_elements(collection) {
  //在这里写入代码
  //  collection_a = [];
  var newArr = [];
  for(var i=0;i<collection.length;i++){
    var temp=collection[i];
    if(temp !== "d-5") {
      var count = 0;
      for (var j = 0; j < collection.length; j++) {
        if (collection[j] == temp) {
          count++;
          collection[j] = -1;
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
  return newArr;
}

module.exports = count_same_elements;
