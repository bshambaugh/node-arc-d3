define(['urijs/URI','jquery','fn_ldpsparql','fn_parsefile'], function(URI,$,ldpsparql,parsefile) {

return function(url, fn) {
  if(URI(url)._parts.query !== null) {
//    document.write('SPARQL');

     ldpsparql.parsesparql(url, function(duck) {
         fn(duck)
    });

  // try...catch...on sparql query ... code...
  } else {
    LDPorFile(url, function(duck) { fn(duck); });
 }
};

function LDPorFile(url,fn) {

   
   // Add link for CORS Proxy
    $.ajaxPrefilter( function (options) {
      let corsproxy = "";
      // let corsproxy = "http://0.0.0.0:8081/";
      if (options.crossDomain && jQuery.support.cors) {

       var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
       options.url = options.url.replace(corsproxy,"");
       options.url = http + corsproxy + options.url;
       }
     });

     $.ajax({
           url: url,
           success: function(res, status, xhr) { 
               if(xhr.status == 200) {
                 if(xhr.getResponseHeader("Link") != null) {
                    let string = xhr.getResponseHeader("Link");
                    let str = 'http://www.w3.org/ns/ldp#Resource';
                    let re = new RegExp(str, "ig");
                    let found = string.match(re);
                 //   document.write('LDP');
                       ldpsparql.parseldp(url, function(duck) {
                       //  jqueryldphttp(url, function(duck) {
                        //   console.log(duck); 
                           fn(duck);
                          });

                 } else {
                 //   document.write('File');

                       parsefile(url, function(duck) {
                             fn(duck);
                        });                     

                 }
               }
           }
     })
}


});

