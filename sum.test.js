const calculateBonus = require("./sum");

describe("calculateBonus function", () => {
  test("should return sum when sum is less than 50", () => {
    expect(calculateBonus(10, 15)).toBe(25);
    expect(calculateBonus(5, 5)).toBe(10);
    expect(calculateBonus(20, 20)).toBe(40);
  });

  test("should return sum when sum equals 50", () => {
    expect(calculateBonus(25, 25)).toBe(50);
    expect(calculateBonus(30, 20)).toBe(50);
  });

  test("should return 50 when sum is greater than 50", () => {
    expect(calculateBonus(30, 30)).toBe(50);
    expect(calculateBonus(100, 100)).toBe(50);
    expect(calculateBonus(26, 25)).toBe(50);
  });

  test("should handle zero values", () => {
    expect(calculateBonus(0, 0)).toBe(0);
    expect(calculateBonus(0, 30)).toBe(30);
    expect(calculateBonus(25, 0)).toBe(25);
  });

  test("should handle negative numbers", () => {
    expect(calculateBonus(-10, 30)).toBe(20);
    expect(calculateBonus(-5, -5)).toBe(-10);
    expect(calculateBonus(-100, 200)).toBe(50);
  });

  test("should handle decimal numbers", () => {
    expect(calculateBonus(10.5, 15.3)).toBe(25.8);
    expect(calculateBonus(25.7, 30.1)).toBe(50);
  });

  test("should handle edge cases around 50", () => {
    expect(calculateBonus(25, 24.9)).toBe(49.9);
    expect(calculateBonus(25, 25.1)).toBe(50);
    expect(calculateBonus(50.1, 0)).toBe(50);
  });
});
