'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection = [];
  if(number_a < number_b) {
    if (number_b <= 26) {
      for (var i = number_a; i <= number_b; i++) {
        collection.push(String.fromCharCode(96 + i));
      }
    }
    else if (number_a <= 26 && number_b > 26 && number_b <= 52) {
      for (var i = number_a; i <= 26; i++) {
        collection.push(String.fromCharCode(i + 96));
      }
      for (var i = 27; i <= number_b; i++) {
        var a = 'a';
        a += String.fromCharCode(i - 26 + 96);
        collection.push(a);
      }
    }
    else if (number_a > 26 && number_b <= 52) {

      for (var i = number_a; i <= number_b; i++) {
        var a = 'a';
        a += String.fromCharCode(i - 26 + 96);
        collection.push(a);
      }

    }
    else if(number_a > 26 && number_b > 52){
      for(var i = number_a;i< 52;i++){
        var a = 'a';
        a += String.fromCharCode(i + 96 -26);
        collection.push(a);
      }
      for(var i = 53;i<= number_b;i++){
        var b = 'b';
        b += String.fromCharCode(i + 96 - 52);
        //console.log(b);
        collection.push(b);
      }
    }
    else if(number_a > 52){
      for(var i = number_a; i< number_b;i++){
        var  b = 'b';
        b += String.fromCharCode(i-52 +96);
        collection.push(b);
      }
    }
    else if(number_a < 26 && number_b > 52){
      for(var i = number_a;i <= 26;i++){
        collection.push(String.fromCharCode(i+96));
      }
      for(var i = 27;i<= 52;i++){
        var a = 'a';
        a += String.fromCharCode(i-26 + 96);
        collection.push(a);
      }
      for(var i = 53;i<= number_b;i++){
        var b = 'b';
        b+=String.fromCharCode(i -52 + 96);
        collection.push(b);
      }
    }
    return collection;
  }
  else if(number_a > number_b){
    if (number_a <= 26) {
      for (var i = number_a; i >= number_b; i--) {
        collection.push(String.fromCharCode(96 + i));
      }
    }
    else if (number_a > 26 && number_b <= 26 && number_a <= 52) {
      for (var i = number_a; i >= 26; i--) {
        var a = 'a';
        a += String.fromCharCode(i - 26 + 96);
        collection.push(a);
      }
      for (var i = 26; i> number_b; i--) {
        collection.push(String.fromCharCode(i + 96));
      }

    }
    else if (number_a <= 52 && number_b > 26) {

      for (var i = number_a; i >= number_b; i--) {
        var a = 'a';
        a += String.fromCharCode(i - 26 + 96);
        collection.push(a);
      }

    }
    else if(number_a > 52 && number_b > 26){
      for(var i = number_a;i> 52;i--){
        var b = 'b';
        b += String.fromCharCode(i + 96 - 52);
        //console.log(b);
        collection.push(b);
      }
      for(var i = 52;i>= number_b;i--){
        var a = 'a';
        a += String.fromCharCode(i + 96 -26);
        collection.push(a);
      }

    }
    else if(number_b > 52){
      for(var i = number_a; i< number_b;i--){
        var  b = 'b';
        b += String.fromCharCode(i-52 +96);
        collection.push(b);
      }
    }
    else if(number_b < 26 && number_a > 52){
      for(var i = number_a;i > 52;i--){
        var b = 'b';
        b+=String.fromCharCode(i -52 + 96);
        collection.push(b);
      }
      for(var i = 52;i>= 27;i--){
        var a = 'a';
        a += String.fromCharCode(i-26 + 96);
        collection.push(a);
      }
      for(var i = 26;i>= number_b;i--){
        collection.push(String.fromCharCode(i+96));
      }

    }
    return collection;
  }
  else if(number_a == number_b){
    if(number_a <= 26){
      collection.push(String.fromCharCode(number_a + 96));
    }
    else if(number_a > 26 && number_a <= 52){
      a = 'a';
      a+=String.fromCharCode(number_a - 26 + 96);
      collection.push(a);

    }
    else if(number_a > 52){
      b = 'b';
      b+= String.fromCharCode(number_a - 52 + 96);
      collection.push(b);
    }
    return collection;
  }
}

module.exports = get_letter_interval_2;

