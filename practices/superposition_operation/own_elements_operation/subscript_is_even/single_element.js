'use strict';
var single_element = function(collection){
  var temp1 = [];
  var temp = [];
  var h = 1;
  while(h<=collection.length){
    temp1.push(collection[h]);
    h = h+2;
  }
  console.log(temp1);
  for(var i =0;i<temp1.length;i++){
    var n=0;
    for(var j = 0; j<i;j++){
      if(temp1[i] == temp1[j]){
        n = -1;
        //console.log(i,collection[i]);
      }

    }

    for(var j = i+1; j<temp1.length;j++){
      if(temp1[i] == temp1[j]){
        n = -1;
        //console.log(i,collection[i]);
      }

    }
    //console.log(collection[i]);
    if(n != -1){
      temp.push(temp1[i]);
    }
    // for(var i = 0;i<collection.length;i++){
    //
    // }
  }
  return temp;
};
module.exports = single_element;
