import CubeRootCommand from "../../../src/Calculator/Commands/Pow/CubeRootCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("CubeRootCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Execute CubeRootCommand", () => {
    calculator.enterNumber("8");

    const cubeRootCommand = new CubeRootCommand(calculator);
    cubeRootCommand.execute();

    expect(calculator.currentOperand).toBe("2");
    expect(calculator.displayValue).toBe("2");
  });

  test("Undo CubeRootCommand", () => {
    calculator.enterNumber("8");

    const cubeRootCommand = new CubeRootCommand(calculator);
    cubeRootCommand.execute();

    cubeRootCommand.undo();

    expect(calculator.currentOperand).toBe("8");
    expect(calculator.displayValue).toBe("8");
  });

  test("Execute CubeRootCommand with decimal value", () => {
    calculator.enterNumber("8");
    calculator.decimal();

    const cubeRootCommand = new CubeRootCommand(calculator);
    cubeRootCommand.execute();

    expect(calculator.currentOperand).toBe("2");
    expect(calculator.displayValue).toBe("2");
  });

  test("Undo CubeRootCommand with decimal value", () => {
    calculator.enterNumber("3");
    calculator.decimal();

    const cubeRootCommand = new CubeRootCommand(calculator);
    cubeRootCommand.execute();

    cubeRootCommand.undo();

    expect(calculator.currentOperand).toBe("3.");
    expect(calculator.displayValue).toBe("3.");
  });
  test("handles undo with no previous state", () => {
    const cubeRootCommand = new CubeRootCommand(calculator);

    cubeRootCommand.undo();
    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
});
