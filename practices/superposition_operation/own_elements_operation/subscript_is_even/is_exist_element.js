 'use strict';
var is_exist_element = function(collection,element){
  var temp = [];
  collection.forEach(function(value,index){
    if(index % 2 == 0){
      temp.push(value);
    }
  });
  console.log(temp);
  if(temp.indexOf(element) == -1){
    return false;
  }
  else{
    return true;
  }
};
module.exports = is_exist_element;
