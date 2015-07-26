/** Prompt: A triangulation of a convex polygon is formed by 
* drawing diagonals between non-adjacent vertices (corners) 
* such that the diagonals never intersect. The problem is to
* find the cost of triangulation with the minimum cost. 
* The cost of a triangulation is sum of the weights of its component 
* triangles. Weight of each triangle is its perimeter 
*/

var dist = function(p1, p2) {
  return Math.sqrt(Math.pow(p1.x-p2.x,2) + Math.pow(p1.y-p2.y,2));
};

var cost = function(vertices, i, j, k) {
  var p1 = vertices[i], p2 = vertices[j], p3 = vertices[k];
  return dist(p1,p2) + dist(p2,p3) + dist(p1,p3);
};

// method 1: recursion. O(2^n) time complexity, O(1) space complexity
var minCostPolygonTriangulation_1 = function(vertices, start, end) {
  if (end < start + 2) {
    return 0;
  } else {
    var result = Number.POSITIVE_INFINITY;
    for (var k = start+1; k < end; k++) {
      result = Math.min(result, (minCostPolygonTriangulation_1(vertices,start,k) +
        minCostPolygonTriangulation_1(vertices,k,end) +
        cost(vertices,start,end,k)));
    }
    return result;
  }
};

var vertices = [{x:0, y:0}, {x:1, y:0},{x:2, y:1},{x:1, y:2},{x:0, y:2}];
console.log(minCostPolygonTriangulation_1(vertices,0,4)); // 15.30

// method2: DP. O(n^3) time complexity, O(n^2) space complexity
var minCostPolygonTriangulation_2 = function(vertices, n) {
  if (n < 3) {
    return 0;
  }
  var table = [];
  for (var i = 0; i < n; i++) {
    table.push([]);
    for (var j = 0; j < n; j++) {
      table[i][j] = Number.POSITIVE_INFINITY;
    }
  }

  for (var gap = 0; gap < n; gap++) {
    for (var i = 0, j = gap; j < n; i++, j++) {
      if (j < i+2) {
        table[i][j] = 0;
      } else {
        table[i][j] = Number.POSITIVE_INFINITY;
        for (var k = i+1; k < j; k++) {
          var val = table[i][k] + table[k][j] + cost(vertices,i,j,k);
          if (table[i][j] > val) {
            table[i][j] = val;
          }
        }
      }
    }
  }
  return table[0][n-1];
};
console.log(minCostPolygonTriangulation_2(vertices,5));
