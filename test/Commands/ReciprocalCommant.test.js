import ReciprocalCommand from "../../src/Calculator/Commands/ReciprocalCommand";
import Calculator from "../../src/Calculator/calculator";

describe("ReciprocalCommand", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("execute() should calculate reciprocal of non-zero operand", () => {
    calculator.enterNumber("5");
    const reciprocalCommand = new ReciprocalCommand(calculator);
    reciprocalCommand.execute();
    expect(calculator.currentOperand).toBe("0.2");
  });

  test("execute() should handle reciprocal of zero", () => {
    calculator.enterNumber("0");
    const reciprocalCommand = new ReciprocalCommand(calculator);
    reciprocalCommand.execute();
    expect(calculator.displayValue).toBe("Error");
  });

  test("undo() should revert the calculator state", () => {
    calculator.enterNumber("8");
    const reciprocalCommand = new ReciprocalCommand(calculator);
    reciprocalCommand.execute();
    reciprocalCommand.undo();
    expect(calculator.currentOperand).toBe("8");
  });
  test("handles undo with no previous state", () => {
    const reciprocalCommand = new ReciprocalCommand(calculator);
    reciprocalCommand.undo();
    expect(calculator.currentOperand).toBe("0");
    expect(calculator.displayValue).toBe("0");
  });
});
