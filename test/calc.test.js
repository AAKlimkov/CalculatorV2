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

  test("enters a sequence of numbers", () => {
    calc.enterNumber("1");
    calc.enterNumber("2");
    expect(calc.displayValue).toBe("12");
  });

  test("clears display", () => {
    calc.enterNumber("1");
    calc.clear();
    expect(calc.displayValue).toBe("0");
  });

  test("adds two numbers", () => {
    calc.enterNumber("1");
    calc.chooseOperation("+");
    calc.enterNumber("2");
    calc.compute();
    expect(calc.displayValue).toBe("3");
  });
});
