/** Prompt: given n of parenthesis, find all the configuration to arrange them 
* and yield no syntax unbalance
*/

// method 1: time complexity O(k^n), repeated patterns are kept tracked in a hash/dictionary
// but repetition itself yield inefficiency
var arrangeParens = function(n) {
  if (n === 0) { // impossible case
    return null;
  }
  var results = ['()'];
  var recurseArrangingParens = function(n) {
    // base case
    if (n === 1) {
      return;
    } else {
      recurseArrangingParens(n-1);
      var map = {};
      var length = results.length;
      for (var i = 0; i < length; i++) {
        var current = results[i];
        var preAdd = '()' + current.slice();
        if (map[preAdd] === undefined) {
          results.push(preAdd);
          map[preAdd] = true;
        }
        
        for (var j = 0; j < current.length; j++) {
          if (current[j] === '(') {
            var toAdd = current.slice(0,j+1) + '()' + current.slice(j+1);
            if (map[toAdd] === undefined) {
              map[toAdd] = true;
              results.push(toAdd);
            }
          }
        }
        var postAdd = current.slice() + '()';
        if (map[postAdd] === undefined) {
          map[postAdd] = true;
          results.push(postAdd);
        }
        
      }
      results.splice(0,length);
    }
  };

  recurseArrangingParens(n);
  return results;
}
console.log(arrangeParens(1));
console.log(arrangeParens(2));
console.log(arrangeParens(3));
