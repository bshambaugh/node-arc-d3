define(['urijs/URI','jquery'], function(URI,$) {
   document.write('hody');
   document.write(URI('http://localhost:8080/marmotta/ldp'));  
   document.write(URI);

/*
    $.get('http://localhost:8080/marmotta/ldp', function(data) {
       document.write(data);
    });
*/

/*
    $.ajax({
     url: "http://localhost:8080/marmotta/ldp",
     },
     {success: {}})
    .done(function( data ) {
     document.write(data);
    });
*/

    /* 
     if ( console && console.log ) {
      console.log( "Sample of data:", data.slice( 0, 100 ) );
     } else {
      document.write(data);
     }
    */



     $.ajax({
           url: "http://localhost:8080/marmotta/ldp",
           success: function(res, status, xhr) { 
              //  document.write(xhr.getAllResponseHeaders(););
            //   document.write(xhr);
            //   document.write(Object.getOwnPropertyNames(xhr));
            //   document.write(xhr.getResponseHeader("Link"));
            //   document.write(xhr.status);
                
               if(xhr.status == 200) {
                 if(xhr.getResponseHeader("Link") != null) {
                //  document.write('howdy');
                    var string = xhr.getResponseHeader("Link");
                    var str = 'http://www.w3.org/ns/ldp#Resource';
                    var re = new RegExp(str, "ig");
                    var found = string.match(re);
                    document.write(found);
                 } else {
                    document.write('notfound');
                 }
               }
           }
     })

  /*.done(function(data) {
       //  document.write(data);
      //   document.write(xhr);
     });
  */
/*
     $.ajax({
           url: "http://localhost:8080/marmotta/ldp",
           success: function(res, status, xhr) {
               document.write(xhr.getResponseHeader("Link"));
           }
     })
*/

});


/*
var URI = require('urijs');
var request = require('request');
*/
/*
//var url = 'http://localhost:8080/marmotta/ldp';
//var url = "http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010";
var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

// The query from a sparql query
if(URI(url)._parts.query !== null) {
console.log('yes, there is a query');
// try...catch...on sparql query ... code...
} else {
  LDPorFile(url, function(duck) { console.log(duck); });
   console.log('no, there is no query');
}

function LDPorFile(url,fn) {
 var type = '';
 request(url, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      if(response.headers.link != null) {
        var string = response.headers.link;
        var str = 'http://www.w3.org/ns/ldp#Resource';
        var re = new RegExp(str, "ig");
        var found = string.match(re);
        type = 'LDP';
        // try ... catch ... on LDP query code..
      } else {
        type = 'File';
        // try ... catch ... on file code...
      }

   }
     return fn(type);
 });
}
*/
