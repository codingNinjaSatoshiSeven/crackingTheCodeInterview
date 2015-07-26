
var inf = Number.POSITIVE_INFINITY;
var graphMatrix = [[0,4,inf,inf,inf,inf,inf,8,inf],
[4,0,8,inf,inf,inf,inf,11,inf],
[inf,8,0,7,inf,4,inf,inf,2],
[inf,inf,7,0,9,14,inf,inf,inf],
[inf,inf,inf,9,0,10,inf,inf,inf],
[inf,inf,4,14,10,0,2,inf,inf],
[inf,inf,inf,inf,inf,2,0,1,6],
[8,11,inf,inf,inf,inf,1,0,7],
[inf,inf,2,inf,inf,inf,6,7,0]];

var minimumSpanningTree = function(graphMatrix) {
  var edges = [];
  var n = graphMatrix.length;
  for (var i = 0; i < n; i++) {
    for (var j = i+1; j < n; j++) {
      if(graphMatrix[i][j] < inf) {
        edges.push({cost:graphMatrix[i][j], start:i, end:j});
      }
    }
  }
  var sortedEdges = edges.sort(function(a,b) {
    return a.cost-b.cost;
  });
  
  var usedVertices = {};
  var minSpanningTree = [];
  var cost = 0;
  for (var i = 0; i < edges.length; i++) {
    // this algorithm doesn't detect if there's a circular path
    if (usedVertices[edges[i].start] === true && usedVertices[edges[i].end] === true) {
      // skip, because it will form a circular path
    } else {
      minSpanningTree.push(edges[i]);
      cost += edges[i].cost;
      usedVertices[edges[i].start] = true;
      usedVertices[edges[i].end] = true;
    }
  }
  return minSpanningTree;

}

console.log(minimumSpanningTree(graphMatrix));

