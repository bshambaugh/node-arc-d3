
define(['tests/jqueryldphttp/tbc-jqueryldphttp'], function(jqueryldphttp) {

return function(url, fn) {
   jqueryldphttp(url, function(duck) {
         fn(duck);
         console.log(duck);
   });
};

});



/*

define(['tests/jquerysparql/tbc-jqueryn3lib'], function(jquerysparql) {

return function(url, fn) {
   jquerysparql(url, function(duck) {

         fn(duck);
         console.log(duck);
   });
};

});

*/


