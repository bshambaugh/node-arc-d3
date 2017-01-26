define(['p5','p5dom','createprimatives'], function(p5,p5dom,createprimatives) {
//var nums = [[56, 45],[185, 175],[185, 45]];
var nums = [];
var arredges = [];
var radius = 55;
var tw = 10;
var titles = ["Hello","World","!"];

//var numbers = [];

for(var i = 0; i < createprimatives.createprimatives.nodes.length; i++) {
  var x = createprimatives.createprimatives.nodes[i].x;
  //document.write(createprimatives.createprimatives.nodes[i].x);
  // document.write(' , ');
  //document.write(createprimatives.createprimatives.nodes[i].y);
  var y = createprimatives.createprimatives.nodes[i].y;
  //document.write('<br><br>');
//  numbers.push([x , y]);
  nums.push([x , y]);
}

for(var i = 0; i < nums.length; i++) {
// document.write(nums[i]);
// document.write('<br>');
}

for(var i = 0; i < createprimatives.createprimatives.edges.length; i++) {
  var point1 = createprimatives.createprimatives.edges[i].point1;
  var point2 = createprimatives.createprimatives.edges[i].point2;  
  var title =  createprimatives.createprimatives.edges[i].label_and_predicate_name;
 // document.write(point1[0] + ' , ' + point1[1] + ' : ' + point2[0] + ' , ' +  point2[1] +  ' : ' + title);
 // document.write('<br>');
 arredges.push(point1[0],point1[1],point2[0],point2[1]);
}

for(var i = 0; i < arredges.length; i++) {
  document.write(arredges[i][0] + ' : ' + arredges[i][1] + ' : ' + arredges[i][2] + ' : ' + arredges[i][3]);
}
/*
document.write(numbers);
document.write('<br>');
for(var i = 0; i < numbers.length; i++) {
 document.write(numbers[i][1]);
 document.write('<br>');
}

for(var i = 0; i < nums.length; i++) {
 document.write(nums[i][0]);
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

  for(var i = 0; i < arredges.length; i++) {
    p.line(arredges[i][0],arredges[i][1],arredges[i][2],arredges[i][3]);
  } 

/*
    for(var i = 0; i < createprimatives.createprimatives.edges.length; i++) {
      p.line(createprimatives.createprimatives.edges[i].point1[0],createprimatives.createprimatives.edges[i].point1[1],createprimatives.createprimatives.edges[i].point2[1],createprimatives.createprimatives.edges[i].point2[1]);
    }
*/

/*
     for(var i = 0; i < nums.length - 1; i++) {
        p.line(nums[i][0], nums[i][1], nums[i+1][0], nums[i+1][1]);
     }
*/

    for(var i = 0; i < createprimatives.createprimatives.nodes.length; i++) {
       p.ellipse(createprimatives.createprimatives.nodes[i].x, createprimatives.createprimatives.nodes[i].y, radius, radius);
       p.fill(0);
       p.text(createprimatives.createprimatives.nodes[i].node_name, createprimatives.createprimatives.nodes[i].x - createprimatives.createprimatives.nodes[i].node_name.length - tw, createprimatives.createprimatives.nodes[i].y + 0.5*tw, tw);
       p.fill(255);
    }

/*
     for(var i = 0; i < nums.length; i++) {
        p.ellipse(nums[i][0], nums[i][1],radius, radius);
        p.fill(0);
        p.text(titles[i], nums[i][0] - titles[i].length - tw, nums[i][1] + 0.5*tw, tw);
        p.fill(255);
     }

*/

   };

}; 

var myp5 = new p5(sketch);


});

