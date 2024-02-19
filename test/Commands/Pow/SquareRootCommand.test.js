import SquareRootCommand from "../../../src/Calculator/Commands/Pow/SquareRootCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("SquareRootCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Execute SquareRootCommand", () => {
    calculator.enterNumber("16");

    const squareRootCommand = new SquareRootCommand(calculator);
    squareRootCommand.execute();

    expect(calculator.currentOperand).toBe("4");
    expect(calculator.displayValue).toBe("4");
  });

  test("Undo SquareRootCommand", () => {
    calculator.enterNumber("8");

    const squareRootCommand = new SquareRootCommand(calculator);
    squareRootCommand.execute();

    squareRootCommand.undo();

    expect(calculator.currentOperand).toBe("8");
    expect(calculator.displayValue).toBe("8");
  });

  test("Execute SquareRootCommand with decimal value", () => {
    calculator.enterNumber("4");
    calculator.decimal();

    const squareRootCommand = new SquareRootCommand(calculator);
    squareRootCommand.execute();

    expect(calculator.currentOperand).toBe("2");
    expect(calculator.displayValue).toBe("2");
  });

  test("Undo SquareRootCommand with decimal value", () => {
    calculator.enterNumber("3");
    calculator.decimal();

    const squareRootCommand = new SquareRootCommand(calculator);
    squareRootCommand.execute();

    squareRootCommand.undo();

    expect(calculator.currentOperand).toBe("3.");
    expect(calculator.displayValue).toBe("3.");
  });
  test("handles undo with no previous state", () => {
    const squareRootCommand = new SquareRootCommand(calculator);

    squareRootCommand.undo();
    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
});
