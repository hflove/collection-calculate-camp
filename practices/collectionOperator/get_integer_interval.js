'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码

  var collection_a = [];
  //var i = 0;
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      collection_a.push(i);
    }
  }

  else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      collection_a.push(i);
    }
  }

  else if (number_b = number_a) {
    collection_a.push(number_a);
  }

  return collection_a;



}

module.exports = get_integer_interval;

