import Calculator from "../src/Calculator/calculator";

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("initializes with 0", () => {
    expect(calc.displayValue).toBe("0");
  });

  test("enters a number", () => {
    calc.enterNumber("1");
    expect(calc.displayValue).toBe("1");
  });
});
