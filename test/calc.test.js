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

  test("subtracts two numbers", () => {
    calc.enterNumber("5");
    calc.chooseOperation("-");
    calc.enterNumber("2");
    calc.compute();
    expect(calc.displayValue).toBe("3");
  });

  test("multiplies two numbers", () => {
    calc.enterNumber("3");
    calc.chooseOperation("*");
    calc.enterNumber("4");
    calc.compute();
    expect(calc.displayValue).toBe("12");
  });

  test("divides two numbers", () => {
    calc.enterNumber("8");
    calc.chooseOperation("/");
    calc.enterNumber("2");
    calc.compute();
    expect(calc.displayValue).toBe("4");
  });

  test("handles division by zero", () => {
    calc.enterNumber("5");
    calc.chooseOperation("/");
    calc.enterNumber("0");
    calc.compute();
    expect(calc.displayValue).toBe("Error");
  });

  test("handles an invalid operation", () => {
    calc.enterNumber("5");
    calc.chooseOperation("^"); // Attempt to choose an invalid operation
    calc.enterNumber("5");
    calc.compute();
    expect(calc.displayValue).toBe("55");
  });

  test("chains multiple operations", () => {
    calc.enterNumber("2");
    calc.chooseOperation("+");
    calc.enterNumber("3");
    calc.chooseOperation("*");
    calc.enterNumber("4");
    calc.compute();
    expect(calc.displayValue).toBe("20"); // (2 + 3) * 4
  });

  test("chooseOperation does nothing if currentOperand is empty", () => {
    calc.chooseOperation("+");
    expect(calc.displayValue).toBe("0");
    expect(calc.operation).toBeNull();
  });

  test("compute is not called if previousOperand is empty", () => {
    calc.enterNumber("1");
    const spy = jest.spyOn(calc, "compute");
    calc.chooseOperation("+");
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  test("compute is called if previousOperand is not empty", () => {
    calc.enterNumber("1");
    calc.chooseOperation("+");
    calc.enterNumber("2");
    const spy = jest.spyOn(calc, "compute");
    calc.chooseOperation("*");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
