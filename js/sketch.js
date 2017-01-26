define(['p5','p5dom'], function(p5,p5dom) {
var nums = [[56, 45],[185, 175],[185, 45]];
var radius = 55;
var tw = 10;
var titles = ["Hello","World","!"];

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

     for(var i = 0; i < nums.length - 1; i++) {
        p.line(nums[i][0], nums[i][1], nums[i+1][0], nums[i+1][1]);
     }


     for(var i = 0; i < nums.length; i++) {
        p.ellipse(nums[i][0], nums[i][1],radius, radius);
        p.fill(0);
        p.text(titles[i], nums[i][0] - titles[i].length - tw, nums[i][1] + 0.5*tw, tw);
        p.fill(255);
     }

   };

}; 

var myp5 = new p5(sketch);


});

