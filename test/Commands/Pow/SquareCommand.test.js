import SquareCommand from "../../../src/Calculator/Commands/Pow/SquareCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("SquareCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Execute SquareCommand", () => {
    calculator.enterNumber("4");

    const squareCommand = new SquareCommand(calculator);
    squareCommand.execute();

    expect(calculator.currentOperand).toBe("16");
    expect(calculator.displayValue).toBe("16");
  });

  test("Undo SquareCommand", () => {
    calculator.enterNumber("8");

    const squareCommand = new SquareCommand(calculator);
    squareCommand.execute();

    squareCommand.undo();

    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });

  test("Execute SquareCommand with decimal value", () => {
    calculator.enterNumber("2");
    calculator.decimal();

    const squareCommand = new SquareCommand(calculator);
    squareCommand.execute();

    expect(calculator.currentOperand).toBe("4");
    expect(calculator.displayValue).toBe("4");
  });

  test("Undo SquareCommand with decimal value", () => {
    calculator.enterNumber("3");
    calculator.decimal();

    const squareCommand = new SquareCommand(calculator);
    squareCommand.execute();

    squareCommand.undo();

    expect(calculator.currentOperand).toBe("3.");
    expect(calculator.displayValue).toBe("3.");
  });
  test("handles undo with no previous state", () => {
    const squareCommand = new SquareCommand(calculator);

    squareCommand.undo();
    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
});
