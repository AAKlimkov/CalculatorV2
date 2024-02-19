import MemorySubtractCommand from "../../../src/Calculator/Commands/Memory/MemorySubtractCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("MemorySubtractCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.currentOperand = "5";
    calculator.memory = 10;
  });

  test("execute subtracts current operand from memory", () => {
    const command = new MemorySubtractCommand(calculator);
    command.execute();

    expect(calculator.memory).toBe(5);
  });
});
