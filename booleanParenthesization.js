/** Prompt: Count the number of ways we can parenthesize 
*the expression so that the value of expression evaluates to true
*/


var booleanParenthesization = function(symbol, operand, n) {
  var F = [], T = [];
  for (var i = 0; i < n; i ++) {
    F.push([]);
    T.push([]);
    for (var j = 0; j < n; j++) {
      F[i][j] = 0;
      T[i][j] = 0;
    }
  }

  for (var i = 0; i < n; i++) {
    F[i][i] = (symbol[i] === 'F') ? 1:0;
    T[i][i] = (symbol[i] === 'T') ? 1:0;
  }

  for (var gap = 1; gap < n; gap++) {
    for (var i = 0, j = gap; j < n; i++, j++) {
      T[i][j] = 0;
      F[i][j] = 0;
      for (var g = 0; g < gap; g++) {
        var k = i + g;
        var tik = T[i][k] + F[i][k];
        var tkj = T[k+1][j] + F[k+1][j]; 

        if (operand[k] === '&') {
          T[i][j] += T[i][k]* T[k+1][j];
          F[i][j] +=(tik*tkj - T[i][k] *T[k+1][j]);
        }

        if (operand[k] === '|') {
          F[i][j] += F[i][k]*F[k+1][j];
          T[i][j] += (tik*tkj - F[i][k]*F[k+1][j]);
        }

        if (operand[k] === '^') {
          T[i][j] += F[i][k]*T[k+1][j] + T[i][k]*F[k+1][j];
          F[i][j] += T[i][k]*T[k+1][j] + F[i][k]*F[k+1][j];
        }
      }
    }
  }
  return T[0][n-1];
};

console.log(booleanParenthesization("TTFT","|&^",4)); // 4

