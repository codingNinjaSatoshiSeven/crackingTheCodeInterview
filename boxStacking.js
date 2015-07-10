/** Prompt: ou are given a set of n types of rectangular 3-D boxes, 
* where the i^th box has height h(i), width w(i) and depth d(i) (all real numbers). 
* You want to create a stack of boxes which is as tall as possible, 
* but you can only stack a box on top of another box if the dimensions of the 2-D base 
* of the lower box are each strictly larger than those of the 2-D base of the higher box. 
* Of course, you can rotate a box so that any side functions as its base. 
* It is also allowable to use multiple instances of the same type of box.
*/

// DP, O(n^2) time complexity, O(n) space complexity
var generateBox = function(boxArray) {
  var result = [];
  for (var i = 0; i < boxArray.length; i++) {
    var pattern1 = {};
    pattern1.h = boxArray[i].w;
    pattern1.d = Math.max(boxArray[i].d, boxArray[i].h);
    pattern1.w = Math.min(boxArray[i].d, boxArray[i].h);

    var pattern2 = {};
    pattern2.h = boxArray[i].d;
    pattern2.d = Math.max(boxArray[i].h, boxArray[i].w);
    pattern2.w = Math.min(boxArray[i].h, boxArray[i].w);

    result.push(pattern1);
    result.push(pattern2);
    result.push(boxArray[i]);
  }
  return result;
};

var boxStacking = function(boxArray) {
  var boxes = generateBox(boxArray);
  boxes = boxes.sort(function(a, b) {
    if (a.d*a.w >= b.d*b.w) {
      return -1;
    } else {
      return 1;
    }
  });

  var msh = [];
  for (var i = 0; i < boxes.length; i++) {
    msh[i] = boxes[i].h;
  };

  for (var i = 1; i < boxes.length; i++) {
    for (var j = 0; j < i; j++) {
      if (boxes[i].w < boxes[j].w && boxes[i].d < boxes[j].d && msh[i] < msh[j] + boxes[i].h) {
        msh[i] = msh[j] + boxes[i].h;
      }
    }
  }

  var max = -1;
  for (var i = 0; i < msh.length; i++) {
    if (max < msh[i]) {
      max = msh[i];
    }
  }
  return max;
};

console.log(boxStacking([{w:4, h: 6, d:7}, {w:1, h: 2, d: 3}, {w: 4, h:5, d:6}, {w:10, h:12, d:32}]));

