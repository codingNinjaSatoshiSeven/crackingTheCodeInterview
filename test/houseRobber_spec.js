describe("House Robber spec", function() {
  it("handles invalid input (array size 0, or not an array) and return -1", function() {
    expect(houseRobber([])).toBe(-1);
    expect(houseRobber_2([])).toBe(-1);
    expect(houseRobber()).toBe(-1);
    expect(houseRobber_2()).toBe(-1);
    expect(houseRobber(123)).toBe(-1);
    expect(houseRobber("123")).toBe(-1);
    expect(houseRobber_2(123)).toBe(-1);
    expect(houseRobber_2("123")).toBe(-1);
  });

  it("handles base case, 1 element then return that element, 2 element then return the max of the 2", function() {
    expect(houseRobber([5])).toBe(5);
    expect(houseRobber_2([5])).toBe(5);
    expect(houseRobber([5, 2])).toBe(5);
    expect(houseRobber_2([5,2])).toBe(5);
  });

  it("find the optimal profit", function() {
    expect(houseRobber([50,1,1,50])).toBe(100);
    expect(houseRobber_2([50,1,1,50])).toBe(100);
    expect(houseRobber([1,2,3,4])).toBe(6);
    expect(houseRobber_2([1,2,3,4])).toBe(6);
    expect(houseRobber([1,2,3])).toBe(4);
    expect(houseRobber_2([1,2,3])).toBe(4);
    expect(houseRobber([1,2,1, 100, 3])).toBe(102);
    expect(houseRobber_2([1,2,1, 100, 3])).toBe(102);
  });

  
});