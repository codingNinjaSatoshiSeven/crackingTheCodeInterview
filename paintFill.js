/** Prompt: Given a 2D array representing pixels, 
* when clicking on a pixel with update color, this will fill its adjacent pixels
* until it sees a change in original color
*/
var colorMap = [[0,1,0,2],[1,0,0,2],[2,1,1,0],[1,2,0,1]];

var paintFill = function(colorMap, i, j, newColor) {
  // base case 
  var m = colorMap.length - 1;
  var n = colorMap[0].length - 1;
  var originalColor = colorMap[i][j];
  var recursePaintFill = function(colorMap, i, j, originalColor, newColor, m, n) {
    if (i > m || i < 0 || j > n || j < 0) {
      return;
    } else {
      if (colorMap[i][j] !== originalColor) {
        return;
      } else {
        colorMap[i][j] = newColor;
        recursePaintFill(colorMap, i+1, j, originalColor, newColor, m, n);
        recursePaintFill(colorMap, i, j+1, originalColor, newColor, m, n);
        recursePaintFill(colorMap, i-1, j, originalColor, newColor, m, n);
        recursePaintFill(colorMap, i, j-1, originalColor, newColor, m, n);
        // right now assuming don't need to consider diagnaly connected pixel as neighbors
      }
    }
  };
  recursePaintFill(colorMap, i, j, originalColor, newColor, m, n);
  
};

paintFill(colorMap, 1, 1, 2);
console.log(colorMap);
