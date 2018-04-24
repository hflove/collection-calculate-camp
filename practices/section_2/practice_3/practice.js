function count_same_elements(collection) {
  //在这里写入代码
  var single = [];
  var res = [];

  //先拿到一共有多少个字母
  collection.forEach(function (value,index) {
    var a = value[0];
    //console.log(a);
    if(single.indexOf(a) == -1){
      single.push(a);
    }
  });


  //找每个字母的个数
  single.forEach(function(ch ,index1){
    var count = 0;
    collection.forEach(function(item,index2){
      //找到
      if (ch == item[0]) {
        if (item.length == 1) {
          count++;
        }else{
          var len = parseInt(item.replace(/[^0-9]/ig, ""));
          count += len;
        }
      };
    });

    res.push({'name':ch,'summary':count});
  });

  return res;
}

module.exports = count_same_elements;
