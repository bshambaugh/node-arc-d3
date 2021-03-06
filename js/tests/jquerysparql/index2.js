define(['lodash','n3lib','jquery'], function(_,N3,$) {

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
		alert('success: ' + data.results.bindings.length + ' results');
	          //		console.log(data.results.bindings.length);
                       for(var k = 0; k < data.results.bindings.length; k++) {
                            document.write("subject: ");
                            document.write(JSON.stringify(data.results.bindings[k].s.value));
                            let subject = JSON.stringify(data.results.bindings[k].s.value);
                            document.write('<br>'+"predicate: ");
                            document.write(JSON.stringify(data.results.bindings[k].p.value));
                            let predicate = JSON.stringify(data.results.bindings[k].p.value);
                            document.write('<br>'+"object: ");
                            document.write(JSON.stringify(data.results.bindings[k].o.value));
                            let object = JSON.stringify(data.results.bindings[k].o.value);
                            document.write('<br><br>');
                            triples.push([subject,predicate,object]);
                         }
                   document.write(triples);
	      	}
  });

});
