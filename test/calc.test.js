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
    calc.chooseOperation("÷");
    calc.enterNumber("2");
    calc.compute();
    expect(calc.displayValue).toBe("4");
  });
  test("percent two numbers", () => {
    calc.enterNumber("20");
    calc.chooseOperation("%");
    calc.enterNumber("40");
    calc.compute();
    expect(calc.displayValue).toBe("8");
  });

  test("handles division by zero", () => {
    calc.enterNumber("5");
    calc.chooseOperation("÷");
    calc.enterNumber("0");
    calc.compute();
    expect(calc.displayValue).toBe("Error");
  });

  test("chains multiple operations", () => {
    calc.enterNumber("2");
    calc.chooseOperation("+");
    calc.enterNumber("3");
    expect(calc.displayValue).toBe("3");
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
  test("changes the sign of a positive number to negative", () => {
    calc.enterNumber("5");
    calc.changeSign();
    expect(calc.displayValue).toBe("-5");
  });

  test("changes the sign of a negative number to positive", () => {
    calc.enterNumber("-5");
    calc.changeSign();
    expect(calc.displayValue).toBe("5");
  });

  test("changes the sign of zero", () => {
    calc.enterNumber("0");
    calc.changeSign();
    expect(calc.displayValue).toBe("0");
  });

  test("changes the sign of a decimal number", () => {
    calc.enterNumber("3.14");
    calc.changeSign();
    expect(calc.displayValue).toBe("-3.14");
  });

  test("changes the sign of a negative decimal number", () => {
    calc.enterNumber("-3.14");
    calc.changeSign();
    expect(calc.displayValue).toBe("3.14");
  });

  test("deletes multiple digits one by one", () => {
    calc.enterNumber("1.23");
    calc.delete();

    expect(calc.displayValue).toBe("1.2");
    calc.delete();
    expect(calc.displayValue).toBe("1.");

    calc.delete();
    expect(calc.displayValue).toBe("1");
    calc.delete();
    expect(calc.displayValue).toBe("0");
    calc.delete();
    expect(calc.displayValue).toBe("0");
  });
  test("when deleting, if the number becomes a single negative sign, it should change to 0", () => {
    calc.enterNumber("-9");
    calc.delete();
    expect(calc.displayValue).toBe("0");
  });
  test("enters a decimal with 0", () => {
    calc.decimal();
    calc.enterNumber("2");
    expect(calc.displayValue).toBe("0.2");
  });
  test("enters a sequence of numbers with decimal", () => {
    calc.enterNumber("1");
    calc.decimal();
    calc.enterNumber("2");
    expect(calc.displayValue).toBe("1.2");
  });

  test("do not enter second decimal", () => {
    calc.enterNumber("1");
    calc.decimal();
    calc.decimal();
    calc.enterNumber("2");
    expect(calc.displayValue).toBe("1.2");
  });
});
