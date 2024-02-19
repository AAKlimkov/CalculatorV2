import CubeCommand from "../../../src/Calculator/Commands/Pow/CubeCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("CubeCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Execute CubeCommand", () => {
    calculator.enterNumber("4");

    const cubeCommand = new CubeCommand(calculator);
    cubeCommand.execute();

    expect(calculator.currentOperand).toBe("64");
    expect(calculator.displayValue).toBe("64");
  });

  test("Undo CubeCommand", () => {
    calculator.enterNumber("8");

    const cubeCommand = new CubeCommand(calculator);
    cubeCommand.execute();

    cubeCommand.undo();

    expect(calculator.currentOperand).toBe("8");
    expect(calculator.displayValue).toBe("8");
  });

  test("Execute CubeCommand with decimal value", () => {
    calculator.enterNumber("2");
    calculator.decimal();

    const cubeCommand = new CubeCommand(calculator);
    cubeCommand.execute();

    expect(calculator.currentOperand).toBe("8");
    expect(calculator.displayValue).toBe("8");
  });

  test("Undo CubeCommand with decimal value", () => {
    calculator.enterNumber("3");
    calculator.decimal();

    const cubeCommand = new CubeCommand(calculator);
    cubeCommand.execute();

    cubeCommand.undo();

    expect(calculator.currentOperand).toBe("3.");
    expect(calculator.displayValue).toBe("3.");
  });
  test("handles undo with no previous state", () => {
    const cubeCommand = new CubeCommand(calculator);

    cubeCommand.undo();
    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
});
