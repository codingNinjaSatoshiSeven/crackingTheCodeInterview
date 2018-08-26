describe("majority Element spec", function() {
  it("handles invalid input (not an array) and return null", function() {
    expect(majorityElement('abc')).toBe(null);
    expect(majorityElement_2('abc')).toBe(null);
    expect(majorityElement(1)).toBe(null);
    expect(majorityElement_2(1)).toBe(null);
    
  });

  it("find the majority Element", function() {
    expect(majorityElement([1,1,2,3])).toBe(1);
    expect(majorityElement_2([1,1,2,3])).toBe(1);
    expect(majorityElement([1,1,2,3, 3, 3, 5])).toBe(3);
    expect(majorityElement_2([1,1,2,3, 3, 3, 5])).toBe(3);
  });

  
});