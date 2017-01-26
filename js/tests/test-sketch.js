define(['p5','p5dom'], function(p5,p5dom) {
var nums = [[56, 45],[185, 175],[185, 45]];
var radius = 55;
var tw = 10;
var titles = ["Hello","World","!"];

//document.write('Hello world!');

//document.write(p5);
/*
var processing = new p5();
document.write(processing);
*/
/*
function processing.setup() {
  createCanvas(400,400);
}
*/

var s = function( p ) {

   var x = 100;
   var y = 100;
  
   p.setup = function() {
     p.createCanvas(700, 410);
   };

   p.draw = function() {
     p.background(0);
     p.fill(255);
     p.rect(x,y,50,50);
   };
}; 

var myp5 = new p5(s);

/*
function setup() {
   createCanvas(400,400);
}
*/

/*
function processing.setup() {

}
*/

/*
function draw() {
 line(nums[0][0], nums[0][1], nums[1][0], nums[1][1]);
 line(nums[1][0],nums[1][1], nums[2][0], nums[2][1]);

  ellipse(nums[0][0], nums[0][1],radius, radius);
  text(titles[0], nums[0][0] - titles[0].length - tw, nums[0][1] + 0.5*tw, tw);

//  line(nums[1][0],nums[1][1], nums[2][0], nums[2][1]);
  ellipse(nums[1][0], nums[1][1], radius, radius);
  text(titles[1], nums[1][0] - titles[1].length - tw, nums[1][1] + 0.5*tw, tw);

  ellipse(nums[2][0],nums[2][1], radius, radius);
  text(titles[2],nums[2][0] - titles[2].length - tw, nums[2][1] + 0.5*tw, tw);
  
//  line(nums[1][0],nums[1][1], nums[2][0], nums[2][1]);
}
*/

});

/*
for (i = 0; i < nums.length; i++) {
   for (j = 0; j < nums.length - 1; j++) {
      document.write(nums[i][j] + ' ' + nums[i][j+1] + ' ' + nums[i+1][j] + ' ' + nums[i+1][j+1]);
   }
} 
*/
