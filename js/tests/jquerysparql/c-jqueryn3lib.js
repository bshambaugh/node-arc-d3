define(['tests/jquerysparql/tbc-jqueryn3lib'], function(jquerysparql) {

//var string = '';

     var siteDomain = "localhost:8080/marmotta/sparql?query=";
     var query = "SELECT * WHERE {?s ?p ?o} LIMIT 14";
     var url = "http://" + siteDomain;
     url += encodeURIComponent(query);
     document.write(url);
     document.write('<br><br>');

   jquerysparql(url, function(duck) {


   });


});
