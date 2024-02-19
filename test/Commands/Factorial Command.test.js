import FactorialCommand, {
  calculateFactorial,
} from "../../src/Calculator/Commands/FactorialCommand";
import Calculator from "../../src/Calculator/calculator";

describe("FactorialCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("execute() should calculate factorial of a non-negative integer", () => {
    calculator.enterNumber("5");
    const factorialCommand = new FactorialCommand(calculator);
    factorialCommand.execute();
    expect(calculator.currentOperand).toBe("120");
  });

  test("execute() should handle factorial of zero", () => {
    calculator.enterNumber("0");
    const factorialCommand = new FactorialCommand(calculator);
    factorialCommand.execute();
    expect(calculator.currentOperand).toBe("1");
  });

  test("execute() should handle factorial of negative number", () => {
    calculator.enterNumber("-3");
    const factorialCommand = new FactorialCommand(calculator);
    factorialCommand.execute();
    expect(calculator.displayValue).toBe("Error");
  });

  test("undo() should revert the calculator state", () => {
    calculator.enterNumber("4");
    const factorialCommand = new FactorialCommand(calculator);
    factorialCommand.execute();
    factorialCommand.undo();
    expect(calculator.currentOperand).toBe("4");
  });
  test("handles undo with no previous state", () => {
    const factorialCommand = new FactorialCommand(calculator);
    factorialCommand.undo();
    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
  test("should handle factorial calculation with success", () => {
    const factorialCommand = new FactorialCommand(calculator);
    calculator.currentOperand = "5";

    factorialCommand.execute();

    expect(calculator.currentOperand).toBe("120");
    expect(calculator.displayValue).toBe("120");
  });

  test("should handle factorial calculation with an error", () => {
    const factorialCommand = new FactorialCommand(calculator);
    calculator.currentOperand = "444444";

    factorialCommand.execute();

    expect(calculator.currentOperand).toBe("Error");
    expect(calculator.displayValue).toBe("Error");
  });

  test("should handle factorial calculation with negative number", () => {
    const factorialCommand = new FactorialCommand(calculator);
    calculator.currentOperand = "-5";

    factorialCommand.execute();

    expect(calculator.currentOperand).toBe("Error");
    expect(calculator.displayValue).toBe("Error");
  });
  test("should return Infinity for non-finite input", () => {
    const nonFiniteInput = Infinity;
    const result = calculateFactorial(nonFiniteInput);

    expect(result).toBe(Infinity);
  });
});
