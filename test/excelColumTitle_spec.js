describe("excel Column # to Alphabet spec", function() {
  it("handles invalid input (not a number) and return null", function() {
    expect(convertToTitle([])).toBe(null);
    expect(convertToTitle('abc')).toBe(null);
    expect(convertToTitle(0)).toBe(null);
    expect(convertToTitle(-1)).toBe(null);
    
  });


  it("perform conversion", function() {
    expect(convertToTitle(1)).toBe('A');
    expect(convertToTitle(26)).toBe('Z');
    expect(convertToTitle(27)).toBe('AA');
    expect(convertToTitle(28)).toBe('AB');
    expect(convertToTitle(703)).toBe('AAA');
    
  });

  
});