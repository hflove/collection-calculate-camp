'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var sum = 0;
  var temp = [];
  var a;
  for(var i = 0;i<collection.length;i++){
    if(collection[i] % 2 == 0) {
      //console.log(collection[i]);
      temp.push(String.fromCharCode(97+i));
    }
  }
  return temp;
}

module.exports = even_to_letter;
