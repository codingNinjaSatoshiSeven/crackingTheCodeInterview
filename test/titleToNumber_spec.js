describe("title To number", function() {
  it("handles invalid input (not a string) and return null", function() {
    expect(titleToNumber(1)).toBe(null);
    expect(titleToNumber([])).toBe(null);
    expect(titleToNumber({a:1})).toBe(null);
    
  });

  it("convert excel title to column number", function() {
    expect(titleToNumber('A')).toBe(1);
    expect(titleToNumber('a')).toBe(1);
    expect(titleToNumber('AA')).toBe(27);
    expect(titleToNumber('AB')).toBe(28);
    expect(titleToNumber('AAA')).toBe(703);
    
  });

  
});