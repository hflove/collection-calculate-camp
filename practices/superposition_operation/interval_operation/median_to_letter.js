'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var sum = 0;
  var temp = [];
  for(var i = 0;i<collection.length;i++){
    if(collection[i] > 20 && collection[i] < 53){
      temp.push(collection[i]);
    }
  }
  //console.log(temp);
  var len = 33;
  var lowMiddle = Math.floor((len - 1) / 2);
  var hightMiddle = Math.ceil((len - 1) / 2);
  var median = (temp[lowMiddle] + temp[hightMiddle]) / 2;    //计算中位数
  if(median <= 26){
    String.fromCharCode(96 + median);
  }
  else if(median > 26){
    var a = 'a';
    a += String.fromCharCode(median - 26 + 96);
    //console.log(a);
  }

  return a;
}

module.exports = median_to_letter;
