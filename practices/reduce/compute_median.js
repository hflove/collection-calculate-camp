'use strict';

function compute_median(collection) {
  //在这里写入代码
  var temp = [];
  // var temp1 = [];
  // var temp2 = [];

  if(collection.length % 2 != 0){
    var a = parseInt(collection.length / 2);
    //console.log(a);
    return collection[a];
  }
  else if(collection.length % 2 == 0 && collection.length < 6){
    var b = collection.length /2 ;
    var c = collection.length /2 -1;
    //console.log(b,c);
    return (collection[b] + collection[c]) /2;
  }
  else if(collection.length > 6 && collection.length % 2 == 0){
    function sortNumber(a,b)
    {
      return a - b
    }
    temp = collection.sort(sortNumber);
    var len = temp.length;
    var lowMiddle = Math.floor((len - 1) / 2);
    var hightMiddle = Math.ceil((len - 1) / 2);
    var median = (temp[lowMiddle] + temp[hightMiddle]) / 2;
    // console.log(temp);
    return median;
  }
  //temp = collection.split("->");
  // for(var i = 0;i<temp.length;i++){
  //     temp1.push(parseInt(temp[i]));
  // }
  // temp2 = temp1.sort(sortNumber);
  // var len = temp2.length;
  // var lowMiddle = Math.floor((len - 1) / 2);
  // var hightMiddle = Math.ceil((len - 1) / 2);
  // var median = (temp2[lowMiddle] + temp2[hightMiddle]) / 2;
  // return median;
  //return temp2;
}

module.exports = compute_median;


