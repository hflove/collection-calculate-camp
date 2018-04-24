'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection_a = [];
  //var i = 0;
  if(number_a < number_b) {
    for (var i = number_a;i<=number_b;i++){
      if(i %2 == 0){
        collection_a.push(i);
      }
    }

    //console.log('*',collection_a);
  }
  else if(number_a>number_b){
    for (var i = number_a;i>=number_b;i--){
      if(i %2 == 0){
        collection_a.push(i);
      }
    }

    // console.log('-',collection_a);
  }
  else if(number_b = number_a){
    if(number_a %2 == 0){
      collection_a.push(number_b);
    }
  }
  return collection_a;





}

module.exports = get_integer_interval_2;
