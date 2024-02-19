import MemoryAddCommand from "../../../src/Calculator/Commands/Memory/MemoryAddCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("MemoryAddCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.currentOperand = 5;
    calculator.memory = 10;
  });

  test("execute adds current operand to memory", () => {
    const command = new MemoryAddCommand(calculator);
    command.execute();

    expect(calculator.memory).toBe(15);
  });
});
