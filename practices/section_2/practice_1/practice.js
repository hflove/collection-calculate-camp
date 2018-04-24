function count_same_elements(collection) {
  //在这里写入代码
  var newArr = [];
  for(var i=0;i<collection.length;i++){
    var temp=collection[i];
    var count=0;
    for(var j=0;j<collection.length;j++){
      if(collection[j]==temp){
        count++;
        collection[j]=-1;
      }
    }
    if(temp != -1){
      var rel = {key:temp,count:count};
      newArr.push(rel);
    }
  }
  return newArr;
}

module.exports = count_same_elements;
