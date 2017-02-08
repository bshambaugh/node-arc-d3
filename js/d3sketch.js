define(['d3','jquery','createprimatives'], function(d3,$,createprimatives) { 
 var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

  loader(url, function(duck) {
  var height = 800;
  var width = 800;
//  console.log(duck);
  draw(width,height,duck)
});

function loader(url, fn) {
  createprimatives(url, function(duckei) {
  //console.log(duckei);
   var dope = duckei;
//   console.log(dope);
   fn(dope);
  });
};

/*
longProcess(url, function(graph) {
  var width = 800;
  var height = 800;
//  draw(width,height,graph);
//
var graph = {"links":[{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"http://purl.org/dc/terms/title"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"\"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\"","value":1,"label":"http://www.w3.org/2000/01/rdf-schema#comment"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"\"0.0(investment cost pulled from children pages)\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"\"0.0 (time to maturity pulled from children pages)\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"\"Research\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#commercialStatus"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"\"Health and Medicine\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"},{"source":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"}],"nodes":[{"id":"\"0.0 (time to maturity pulled from children pages)\"","group":1},{"id":"\"0.0(investment cost pulled from children pages)\"","group":1},{"id":"\"Food Growing Methods\"","group":1},{"id":"\"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\"","group":1},{"id":"\"Health and Medicine\"","group":1},{"id":"\"Research\"","group":1},{"id":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","group":1},{"id":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure","group":1},{"id":"http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl","group":1}]};
//
//  draw(width,height,graph); 
  console.log(graph);
});
*/

/*
function longProcess(url, fn) {
  createprimatives(url, function(dummy) {
   //console.log(duckei);
  //  var graph = dummy;
    //Create the SVG Viewport
//    var width = 800;
//    var height = 800;
    //
      loadgraph(width, height, graph, function() {
         draw(width, height, graph);
       });
    //
   //  console.log(graph);
     fn(dummy);
  });
};
//  callback(graph);
//};
*/

var width = 800;
var height = 800;
//console.log(graph);
var graph = {"links":[{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"http://purl.org/dc/terms/title"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\"","value":1,"label":"http://www.w3.org/2000/01/rdf-schema#comment"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"0.0(investment cost pulled from children pages)\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"0.0 (time to maturity pulled from children pages)\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Research\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#commercialStatus"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Health and Medicine\"","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"},{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure","value":1,"label":"http://data.thespaceplan.com/ontologies/lsi#label"}],"nodes":[{"id":"\"0.0 (time to maturity pulled from children pages)\"","group":1},{"id":"\"0.0(investment cost pulled from children pages)\"","group":1},{"id":"\"Food Growing Methods\"","group":1},{"id":"\"For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input.\"","group":1},{"id":"\"Health and Medicine\"","group":1},{"id":"\"Research\"","group":1},{"id":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support","group":1},{"id":"http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure","group":1},{"id":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","group":1}]};


// I need to execute this function only if graph is returned...
//draw(width,height,graph);

/*
function loadgraph(width, height, graph, callback) {
  callback();
}
*/

function draw(width,height,graph) {

 var svgContainer = d3.select("body").append("svg")
                                       .attr("width",width)
                                       .attr("height",height);

  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

  var link = svgContainer.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    var linklabel = svgContainer.append("g")
                  .attr("class","links")
                  .selectAll("text")
                  .data(graph.links)
                  .enter().append("text");

   var linklabels = linklabel
                    .text( function(d) { return d.label; })
                    .attr("font-family","sans-serif")
                    .attr("font-size","10px")
                    .attr("fill","black");


  var nodevar = svgContainer.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

    var nodelabel = svgContainer.append("g")
                   .attr("class","nodes")
                   .selectAll("text")
                   .data(graph.nodes)
                   .enter()
                   .append("text")
                   .call(d3.drag()
                       .on("start", dragstarted)
                       .on("drag", dragged)
                       .on("end", dragended));

   var nodelabels = nodelabel
                  //  .attr("x", function(d) { return d.x; })
                  //  .attr("y", function(d) { return d.y; })
                    .text( function(d)  { return d.id; })
                    .attr("font-family","sans-serif")
                    .attr("font-size","10px")
                    .attr("fill","black");


   nodevar.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);



  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
   
    linklabels
        .attr("x", function(d) { return (d.source.x + d.target.x)/2; })
        .attr("y", function(d) { return (d.source.y + d.target.y)/2; });

    nodevar
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

     nodelabels
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; });
  }


  function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

};

//});

});
