import MemoryClearCommand from "../../../src/Calculator/Commands/Memory/MemoryClearCommand";
import Calculator from "../../../src/Calculator/calculator";

describe("MemoryClearCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.memory = 10;
  });

  test("execute clears the memory", () => {
    const command = new MemoryClearCommand(calculator);
    command.execute();

    expect(calculator.memory).toBeNull();
  });
});
