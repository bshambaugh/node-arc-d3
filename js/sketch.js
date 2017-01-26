define(['p5','p5dom','createprimatives'], function(p5,p5dom,createprimatives) {
var radius = 55;
var tw = 10;

var Primatives = createprimatives.createprimatives;

// test loops to check that the data is loaded...
/*
for(var i = 0; i < Primatives.nodes.length; i++) {
   document.write(Primatives.nodes[i].x + ' , ' + Primatives.nodes[i].y + ' , ' + Primatives.nodes[i].node_name );
   document.write('<br>');
}

document.write('<br>');

for(var i = 0; i < Primatives.edges.length; i++) {
document.write(Primatives.edges[i].point1[0] + ' , ' + Primatives.edges[i].point1[1] + ' : ' + Primatives.edges[i].point2[0] + ' , ' +Primatives.edges[i].point2[1]  +' : ' + Primatives.edges[i].label_and_predicate_name);
document.write('<br>');
}
*/

var sketch = function( p ) {

   var x = 100;
   var y = 100;
  
   p.setup = function() {
     p.createCanvas(700, 410);
   };

   p.draw = function() {
     p.background(0);
     p.fill(255);
     p.stroke(255);

  for(var i = 0; i < Primatives.edges.length; i++) {
      p.line(Primatives.edges[i].point1[0],Primatives.edges[i].point1[1],Primatives.edges[i].point2[0],Primatives.edges[i].point2[1]);
     p.text(Primatives.edges[i].label_and_predicate_name,0.5 * (Primatives.edges[i].point2[0] + Primatives.edges[i].point1[0]),0.5 * (Primatives.edges[i].point2[1]+tw + Primatives.edges[i].point1[1]+tw),tw + 5,tw + 5);
  }
 
  for(var i = 0; i < Primatives.nodes.length; i++) {
       p.ellipse(Primatives.nodes[i].x,Primatives.nodes[i].y, radius, radius);
       p.fill(0);
       p.text(Primatives.nodes[i].node_name, Primatives.nodes[i].x - Primatives.nodes[i].node_name.length - tw, Primatives.nodes[i].y + 0.5*tw, tw);
       p.fill(255);
    }

   };

}; 

var myp5 = new p5(sketch);


});

