//alert();

define(['lodash'], function(_) {
 
var a = [1,2,3,4,5];
document.write('Write an array'+'<br>');
document.write(a);
// convert array to string
var b = _.join(a,',');
document.write('<br>');
document.write('Write the array as a string'+'<br>');
document.write(b);
document.write('<br>');
document.write('Reverse the elements of the array and print them'+'<br>');
document.write(_.join(_.reverse(a),','));
document.write('<br>'+'Test the use of a function'+'<br>');
document.write('Add 3 and 4. It equals:'+'<br>');
document.write(add(3,4));

function add(a,b) {
   return a + b;
}

});

