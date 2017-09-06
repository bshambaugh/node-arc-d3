define(['sigma','jquery','sigma_createprimitives'], function(sigma,$,sigma_createprimitives) { 
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
   sigma_createprimitives(url, function(innercallbackfn) {
   //console.log(duckei);
      callbackfn(innercallbackfn);
  });

}

function myCallback(results) {
//   var height = document.getElementById('graphcontainer').clientHeight - 4 * document.getElementById('graphcontainer').clientTop;
//  var width = document.getElementById('graphcontainer').clientWidth - 2 * document.getElementById('graphcontainer').clientLeft;

//  width = 1024;
//  height = 800;
//    width = 600;
//    height = 500;
//  console.log(results);
  draw(results);
//  draw(width,height,results);
}

// longProcess(url,myCallback);

function draw(graph) {
//function draw(width,height,graph) {

/**
 * Just a simple example to show how to use the sigma.layout.noverlap
 * plugin:
 *
 * A random graph is generated. Noverlap is then run.
 */

var g = graph;

//document.write(JSON.stringify(g));

s = new sigma({
  graph: g,
  renderer : {
  container: document.getElementById('graphcontainer'),
  type: 'canvas' },
  settings: {
    drawEdges: true,
    edgeLabelSize: 'proportional',
    minNodeSize: 4,
    maxNodeSize: 8,
    minEdgeSize: 1,
    maxEdgeSize: 1,
    labelThreshold: 1,
    doubleClickEnabled: false,
    enableEdgeHovering: true,
    edgeHoverColor: 'edge',
    defaultEdgeHoverColor: '#000',
    edgeHoverSizeRatio: 1,
    edgeHoverExtremities: true
  }
});

var config = {worker: true, 
              barnesHutOptimize: true,
              barnesHutTheta: 0.25,
              strongGravityMode: false,
              gravity: 0.01,
              scalingRatio: 0.01};
// Start the ForceAtlas2 algorithm:
s.startForceAtlas2(config);

};


});
