'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  function sortNumber(a,b)
  {
    return a - b
  }
  //在这里写入代码
  var temp = [];
  var temp1 = [];
  var temp2 = [];
  temp = collection.split("->");
  for(var i = 0;i<temp.length;i++){
    temp1.push(parseInt(temp[i]));
  }
  temp2 = temp1.sort(sortNumber);
  var len = temp2.length;
  var lowMiddle = Math.floor((len - 1) / 2);
  var hightMiddle = Math.ceil((len - 1) / 2);
  var median = (temp2[lowMiddle] + temp2[hightMiddle]) / 2;
  return median;
  //return temp2;
}

module.exports = compute_chain_median;
