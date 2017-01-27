define(['rdflib'], function($rdf) {

//document.write(typeof $rdf);
//document.write(typeof $rdf.graph());
document.write('name  :' + '   typeof'); 
document.write('<br><br>');
var properties = Object.getOwnPropertyNames($rdf.graph());
for(var i = 0; i < properties.length; i++) {
  var g = (properties[i]);
  var p = typeof $rdf[g];
/*  if(p === 'function') {
    document.write(g);
    document.write('<br>');
    document.write($rdf[g]);
    document.write('<br><br><br>');
  } */
  document.write(properties[i] + '   :   ' + p);
  document.write('<br>');
}

//document.write(typeof $rdf.serialize());

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
var url = 'https://bshambaugh.databox.me/profile/card#me';
//var url = 'http://localhost/node-arc-p5/data/';
var mimeType = 'text/turtle';
//var url = 'http://data.thespaceplan.com/isp.rdf';

fetcher.nowOrWhenFetched(url, function(ok, body, xhr) {
    if (!ok) {
        console.log("Oops, something happened and couldn't fetch data");
    } else {
        // do something with the data in the store (see below)
        document.write(store);
    }
})

var me = $rdf.sym('https://www.w3.org/People/Berners-Lee/card#i');
store.add(me, FOAF('knows'), $rdf.sym('https://fred.me/profile#me'));

//store.add(me, FOAF('knows'), $rdf.sym('https://fred.me/profile#me'));
//store.add(me, FOAF('name'), "Albert Bloggs");
//document.write(store);
});
