/*
Problem: A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
*/

/** ex: 4 steps should return 7 ways:
1,1,1,1; 2,2; 2,1,1; 1,2,1; 1,1,2; 1,3; 3,1
**/

function numberOfWays(steps) {
  if (steps < 0) return 0;
  else if (steps === 0) return 1;
  //num of steps will equal num of steps to previous step plus one
  else {
    return numberOfWays(steps - 1) + numberOfWays(steps - 2) + numberOfWays(steps - 3);
  }
}
