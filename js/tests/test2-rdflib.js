define(['rdflib'], function($rdf) {

// Namespaces
var RDF = $rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
var RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#");
var FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/");
var OWL = $rdf.Namespace("http://www.w3.org/2002/07/owl#");
var SPACE = $rdf.Namespace("http://www.w3.org/ns/pim/space#");
var UI = $rdf.Namespace("http://www.w3.org/ns/ui#");
var DCT = $rdf.Namespace("http://purl.org/dc/terms/");
var CERT = $rdf.Namespace("http://www.w3.org/ns/auth/cert#");
var ACL = $rdf.Namespace("http://www.w3.org/ns/auth/acl#");

var store = $rdf.graph()

//document.write(typeof store);
var timeout = 5000 // 5000 ms timeout
var fetcher = new $rdf.Fetcher(store, timeout)
var url = 'http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl';
var mimeType = 'text/turtle';
var subj = $rdf.sym('http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl');
fetcher.nowOrWhenFetched(url, function(ok, body, xhr) {
    if (!ok) {
        console.log("Oops, something happened and couldn't fetch data");
    } else {
        // do something with the data in the store (see below)
        // the store contains an object with the triples and the store...
         document.write(store);
//        document.write('whatever'+'\n');
    //     var lucky = store.each();
      //  document.write(lucky);
//         document.write(Object.getOwnPropertyNames(lucky));
     //    document.write(lucky['13']);      
         
//        for (var i=0; i < lucky.length;i++) {
    //       console.log(lucky[i].subject.uri);
           //console.log(luck);
        //   console.log(luck.subject.uri) // a person having friends
        //  console.log(luck.object.uri) // a friend of a person
//}
 
    }
})

});
