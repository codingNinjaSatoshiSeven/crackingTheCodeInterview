/** Prompt: You are given n activities with their start and finish times. 
* Select the maximum number of activities that can be performed by a single person, 
* assuming that a person can only work on a single activity at a time.
*/

// Greedy Algorithm: O(nlogn) time complexity due to sorting
var activitySelection = function(activities) {
  activities = activities.sort(function(a,b){
    return b.end > a.end ? -1: 1;
  });
  var result = [];
  result.push(activities[0].index);
  var finishTime = activities[0].end;
  for (var i = 1; i < activities.length; i++) {
    if ( activities[i].start > finishTime) {
      result.push(activities[i].index);
      finishTime = activities[i].end;
    }
  }
  return result;
};

console.log(activitySelection([{start:1,end:2, index: 0}, 
  {start: 3,  end: 4 ,index: 1},
  {start: 0,  end: 6, index: 2},
  {start: 5,  end: 7, index: 3},
  {start: 8,  end: 9, index: 4},
  {start: 5,  end: 9, index: 5}]));
