var nums = [[56, 45],[185, 175],[185, 45]];
var radius = 55;
var tw = 10;
var titles = ["Hello","World","!"];

function setup() {
  createCanvas(400, 400);
}

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

/*
for (i = 0; i < nums.length; i++) {
   for (j = 0; j < nums.length - 1; j++) {
      document.write(nums[i][j] + ' ' + nums[i][j+1] + ' ' + nums[i+1][j] + ' ' + nums[i+1][j+1]);
   }
} 
*/
