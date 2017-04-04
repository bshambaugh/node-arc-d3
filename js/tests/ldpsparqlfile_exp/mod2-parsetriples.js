
define(['tests/jqueryldphttp/tbc-jqueryn3lib'], function(jquerysparql) {

return function(url, fn) {
   jquerysparql(url, function(duck) {
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


