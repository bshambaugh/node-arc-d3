define(['d3','jquery','createprimitives'], function(d3,$,createprimitives) { 
 var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';
//var url = 'http://localhost/node-arc-d3/data/all_vf.ttl';
// var url = 'http://localhost/node-arc-d3/data/person.jsonld';

function longProcess(callbackfn) {
  var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl'; 
//   var url = 'http://localhost/node-arc-d3/data/all_vf.ttl'; 
//     var url = 'http://localhost/node-arc-d3/data/person.jsonld';
   createprimitives(url, function(innercallbackfn) {
   //console.log(duckei);
      callbackfn(innercallbackfn);
  });

}

function myCallback(results) {
  width = 1024;
  height = 800;
 // console.log(results);
  draw(width,height,results);
}

longProcess(myCallback);


function draw(width,height,graph) {

 // see https://bl.ocks.org/mbostock/4062045

 var svgContainer = d3.select("body").append("svg")
                                       .attr("width",width)
                                       .attr("height",height);

  var color = d3.scaleOrdinal(d3.schemeCategory20);

  var simulation = d3.forceSimulation()
//    .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(300).strength(0.5))
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(60));
  //  .on("ticker", ticker);

  var link = svgContainer.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    // Extended d3 force directed graphs with link labels

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


/* 
    var linknodes = svgContainer.append("g")
          .attr("class","nodes")
          .selectAll("circle")
          .data(graph.links)
          .enter().append("circle")
          .attr("r", 5) 
   //      .enter().append("ellipse")
     //     .attr("rx", function(d) { return d.label.length * 4 })
     //     .attr("ry", 15)
          .style("fill", d3.color("red"))
        //  .style("opacity", 0.00);
          .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
*/


  var nodevar = svgContainer.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
//    .enter().append("circle")
//      .attr("r", 5)
       .enter().append("ellipse")
       .attr("rx", function(d) { return d.id.length * 4 })
       .attr("ry", 15)
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
 
    // Extended d3 dforce directed graph with node labels
   
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
                    .attr("fill","black")
                    .attr("text-anchor", "middle");

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
       
    // extended with link labels

/*
    linknodes
        .attr("cx", function(d) { return (d.source.x + d.target.x)/2; })
        .attr("cy", function(d) { return (d.source.y + d.target.y)/2; });
*/

    linklabels
        .attr("x", function(d) { return (d.source.x + d.target.x)/2; })
        .attr("y", function(d) { return (d.source.y + d.target.y)/2; });

    nodevar
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

      // extended with node labels

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


});
