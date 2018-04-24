'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collection_c = [];
  if(number_a < number_b){
    var j = 97;
    //String.fromCharCode(j);
    for(var i = number_a;i <= number_b;i++){
      collection_c.push(String.fromCharCode(j));
      j++;
    }
  }
  else if(number_a > number_b){
    var j = 97;
    //String.fromCharCode(j);
    for(var i = number_a;i >= number_b;i--){
      collection_c.push(String.fromCharCode(j+number_a-number_b));
      j--;
    }
  }
  else{
    collection_c.push(String.fromCharCode(number_a+96));
  }

  // else if(number_a > number_b){
  //
  //  }
  //console.log( String.fromCharCode(97));
  return collection_c;
}

module.exports = get_letter_interval;
