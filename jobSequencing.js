/** Prompt: Given an array of jobs where every job has a deadline and associated profit 
* if the job is finished before the deadline. It is also given that every job takes 
* single unit of time, so the minimum possible deadline for any job is 1. 
* How to maximize total profit if only one job can be scheduled at a time.
*/

var jobSequencing = function(jobs) {
  var jobsDup = jobs.sort(function(a,b){
    return a.profit < b.profit;
  });
  var result = [], slot = [];
  for (var i = 0; i < jobsDup.length; i++) {
    slot[i] = false;
  }
  for (var i = 0; i< jobsDup.length; i++) {
    for (var j = Math.min(jobsDup.length, jobsDup[i].deadline)-1; j >= 0; j--) {
      if (slot[j] === false) {
        result[j] = jobsDup[i].name;
        slot[j] = true;
        break;
      }
    }
  }
  return result;
};

console.log(jobSequencing([{name:'a', deadline:2, profit:100}, 
  {name:'b', deadline:1, profit:19}, 
  {name:'c', deadline:2, profit:27},
  {name:'d', deadline:1, profit:25}, 
  {name:'e', deadline:3, profit:15}
])); // c, a, e
