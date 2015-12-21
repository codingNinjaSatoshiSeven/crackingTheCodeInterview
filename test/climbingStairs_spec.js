describe("Climbing Stairs spec", function() {
  it("handles invalid input (<=0) and return -1", function() {
    expect(climbStairs(-1)).toBe(-1);
    expect(climbStairs(0)).toBe(-1);
  });

  it("return base case 1 way for 1 step, 2 way for 2 step", function(){
  	expect(climbStairs(1)).toBe(1);
  	expect(climbStairs(2)).toBe(2);
  });

  it("return the correct ways for other step", function(){
  	expect(climbStairs(3)).toBe(3);
  	expect(climbStairs(4)).toBe(5);
  });

  xit("takes in only integer", function(){
  	expect(climbStairs(3.14)).toBe(-1);
  });

  xit("takes in only numbers type", function(){
  	expect(climbStairs("hello")).toBe(-1);
  });
});