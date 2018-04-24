'use strict';
var even_asc_odd_desc = function(collection){
  var collection_a = [];
  var collection_b = [];
  var collection_c = [];
  var collection_d = [];
  for(var i = 0;i<collection.length;i++){
    if(collection[i] % 2 == 0){
      collection_a.push(collection[i]);
    }
    else{
      collection_b.push(collection[i]);
    }
  }
  var temp = 0;
  function sortNumber(a,b)
  {
    return a - b
  }
  function sortNumber1(a,b)
  {
    return b - a
  }
  collection_c = collection_a.sort(sortNumber);
  collection_d = collection_b.sort(sortNumber1);
  for(var i =0;i<collection_d.length;i++){
    collection_c.push(collection_d[i]);
  }
  return  collection_c ;
};
module.exports = even_asc_odd_desc;
