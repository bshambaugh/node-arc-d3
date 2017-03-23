define(['jquery','n3lib'], function($,N3) {

var string = '';

   jquerysparql(string, function(duck) {


   });

   function jquerysparql(string, fn) {
     var siteDomain = "localhost:8080/marmotta/sparql?query=";
     var query = "SELECT * WHERE {?s ?p ?o} LIMIT 14";
     var url = "http://" + siteDomain;
     url += encodeURIComponent(query);
     let triples = [];
     // document.write(url);
     $.ajax({
        dataType: 'json',
        url: url,
        success: function(data) {
        //      alert('success: ' + data.results.bindings.length + ' results');
                  //            console.log(data.results.bindings.length);
                       for(var k = 0; k < data.results.bindings.length; k++) {
                           let subject = data.results.bindings[k].s.value;
                          //  let subject = JSON.stringify(data.results.bindings[k].s.value);
                         //   let predicate = JSON.stringify(data.results.bindings[k].p.value);
                            let predicate = data.results.bindings[k].p.value;
                            let object = data.results.bindings[k].o.value;
                          //  let object = JSON.stringify(data.results.bindings[k].o.value);
                            triples.push([subject,predicate,object]);
                         }
                   document.write(triples);
                   fn(triples);
                }
     });

  }


});
