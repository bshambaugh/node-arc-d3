define(['d3','jquery','createprimitives'], function(d3,$,createprimitives) { 
// change d3 to sigma

// I passed the url into the longProcess function, instead of having it inside
//  var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';
// var url = 'http://localhost/node-arc-d3/data/test.nq';
// var url = 'http://localhost:8080/marmotta/ldp';
// var url = "http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010";
// var url = 'http://localhost/node-arc-d3/data/johnlennon.json';
//  var url = 'http://localhost/node-arc-d3/data/example.json';
// var url = 'http://localhost/node-arc-d3/data/all_vf.ttl';
// var url = 'http://localhost/node-arc-d3/data/person.jsonld';

return function(url) {
//   return longProcess(url,myCallback);
     longProcess(url,myCallback);
}


/*
evenLongerProcess(url);

function evenLongerProcess(url) {
   longProcess(url,myCallback);
}
*/

/*
function evenLongerProcess(url, othercallbackfn) {
   longProcess(url, function(innerothercallbackfn) {

       othercallbackfn(innerothercallbackfn);
   });

}
*/

function longProcess(url,callbackfn) {
//  var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl'; 
// var url = 'http://localhost/node-arc-d3/data/test.nq';
//  var url = 'http://localhost:8080/marmotta/ldp';
//  var url = "http://localhost:8080/marmotta/sparql?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010";
//  var url = 'http://localhost/node-arc-d3/data/johnlennon.json';
//   var url = 'http://localhost/node-arc-d3/data/example.json';
//   var url = 'http://localhost/node-arc-d3/data/all_vf.ttl'; 
//     var url = 'http://localhost/node-arc-d3/data/person.jsonld';
   createprimitives(url, function(innercallbackfn) {
   //console.log(duckei);
      callbackfn(innercallbackfn);
  });

}

function myCallback(results) {
   var height = document.getElementById('graphcontainer').clientHeight - 4 * document.getElementById('graphcontainer').clientTop;
 var width = document.getElementById('graphcontainer').clientWidth - 2 * document.getElementById('graphcontainer').clientLeft;

//  width = 1024;
//  height = 800;
//    width = 600;
//    height = 500;
 // console.log(results);
  draw(width,height,results);
}

// longProcess(url,myCallback);


function draw(width,height,graph) {

};


});
