describe("count and say spec", function() {
  it("handles invalid input (not a number) and return null", function() {
    expect(countAndSay([])).toBe(null);
    expect(countAndSay('hello')).toBe(null);
    expect(countAndSay()).toBe(null);
    
  });

  it("handles base case, 1 element then return that element prefixed by 1", function() {
    expect(countAndSay(1)).toBe('11');
    expect(countAndSay(2)).toBe('12');
  });

  it("perform countAndSay", function() {
    expect(countAndSay(11)).toBe('21');
    
  });

  xit("should handle non integer case and negative number case", function(){

  });
  
});