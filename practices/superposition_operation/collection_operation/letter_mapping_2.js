'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = 0;
  var temp = [];
  var a;
  for(var i = 0;i<collection.length;i++){
    sum += collection[i];
  }
  var avg = parseInt(sum / collection.length);

  return String.fromCharCode(97+avg);
}

module.exports = average_to_letter;

