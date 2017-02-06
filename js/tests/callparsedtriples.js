define(['jquery','parsetriples'], function($,parsetriples) {
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';
$.get(url, function(data) {
 //   alert(data);
// document.write(JSON.stringify(data));
 var string = JSON.stringify(data);
 var string = data.toString();
 var string_2 = string.replace(/'/ig,'\\\'');
 var string_3 = string_2.replace(/<>/ig,'<'+url+'>');
// var string2 = str.replace("\'","\\\'");
 document.write(string_3);
 document.write('<br><br>');

  parsetriples(string_3, function(duck) {
//    document.write(N3);
//    console.log(N3);
//    console.log(Object.getOwnPropertyNames(N3));
//   console.log(duck);
     document.write(duck);
     document.write('<br><br>');
     document.write(duck[0]);
  });


});

});

