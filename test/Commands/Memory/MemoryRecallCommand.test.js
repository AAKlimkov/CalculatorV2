import MemoryRecallCommand from "../../../src/Calculator/Commands/Memory/MemoryRecallCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("MemoryRecallCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.currentOperand = "5";
    calculator.memory = 10;
  });

  test("execute recalls memory and updates current operand and display", () => {
    const command = new MemoryRecallCommand(calculator);
    command.execute();

    expect(calculator.currentOperand).toBe("10");
    expect(calculator.displayValue).toBe("10");
  });

  test("undo restores previous calculator state", () => {
    const previousState = {
      displayValue: calculator.displayValue,
      currentOperand: calculator.currentOperand,
      previousOperand: calculator.previousOperand,
      operation: calculator.operation,
    };

    const command = new MemoryRecallCommand(calculator);
    command.execute();

    command.undo();

    expect(calculator.displayValue).toBe(previousState.displayValue);
    expect(calculator.currentOperand).toBe(previousState.currentOperand);
    expect(calculator.previousOperand).toBe(previousState.previousOperand);
    expect(calculator.operation).toBe(previousState.operation);
  });
});
