define(['urijs/URI','jquery','tests/jquerysparql/tbc2-jqueryn3lib','libraries/fn_parsefile'], function(URI,$,jquerysparql,parsefile) {

//var url = "http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010";
//var url = "http://localhost:8080/marmotta/ldp";
//var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

return function(url, fn) {
  if(URI(url)._parts.query !== null) {
    document.write('SPARQL');

     jquerysparql.parsesparql(url, function(duck) {
         fn(duck)
       //  document.write(duck);
    });

  // try...catch...on sparql query ... code...
  } else {
    LDPorFile(url, function(duck) { fn(duck); });
 }
};

function LDPorFile(url,fn) {
     var type = '';
     $.ajax({
           url: url,
           success: function(res, status, xhr) { 
               if(xhr.status == 200) {
                 if(xhr.getResponseHeader("Link") != null) {
                    var string = xhr.getResponseHeader("Link");
                    var str = 'http://www.w3.org/ns/ldp#Resource';
                    var re = new RegExp(str, "ig");
                    var found = string.match(re);
                    document.write('LDP');
                       jquerysparql.parseldp(url, function(duck) {
                       //  jqueryldphttp(url, function(duck) {
                        //   console.log(duck); 
                           fn(duck);
                          });

                 } else {
                    document.write('File');

                  //    jquerysparql.parsefile(url, function(duck) {
                   //    jquerysparql.parsefile(url, function(duck) {
                       parsefile(url, function(duck) {
                           //  document.write(duck);   
                             fn(duck);
                        });                     

                 }
               }
            //  return fn(type);
           }
     })
}


});

