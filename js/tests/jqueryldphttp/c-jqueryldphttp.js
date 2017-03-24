define(['tests/jqueryldphttp/tbc-jqueryldphttp'], function(jqueryldphttp) {
var siteDomain = "localhost:8080/marmotta/ldp"
var url = "http://" + siteDomain;

   jqueryldphttp(url, function(duck) {
         document.write(duck);
   });

});
